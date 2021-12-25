import {
  MapContainer,
  TileLayer,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

import "../map.css";
import * as actions from "../../actions/routeMap"

function RouteMap() {
  const { routes, popup, mapCenterPos } = useSelector(
    (store) => store.routeMapReducer
  );
  const dispatch = useDispatch()
  const [centerPos, setcenterPos] = useState(mapCenterPos);

  let bounds = [];

  useEffect(() => {
    setcenterPos(mapCenterPos);
  }, [mapCenterPos]);

  function _HandleClickRoute(e, data) {
    const positions = data.positions;
    const result = {
      position: positions[parseInt(positions.length / 2)],
      RouteName: data.RouteName,
      City: data.City,
      RoadSectionStart: data.RoadSectionStart,
      RoadSectionEnd: data.RoadSectionEnd,
      CyclingLength: data.CyclingLength,
    };
    console.log(positions);
    dispatch(actions.setPopup(result));
    setcenterPos(e.latlng);
  }

  function _renderRoutes() {
    let list = [];
    bounds = [];
    routes.forEach((route, idx) => {
      const positions = route.positions;
      bounds.push(positions);
      list.push(
        <Polyline
          key={`mapRoute-polyline-${idx}`}
          pathOptions={
            popup.RouteName !== route.RouteName
              ? { color: "#0D706D", weight: 5, smoothFactor: 5 }
              : { color: "#F8B714", weight: 5, smoothFactor: 10 }
          }
          positions={positions}
          eventHandlers={{
            click: (e) => _HandleClickRoute(e, route),
          }}
        />
      );
    });
    return list;
  }

  function ChangeMap({ center }) {
    let map = useMap();
    map.panTo(center);
    if (bounds.length > 0 && popup.position === undefined) {
      map.fitBounds(bounds);
    }

    return null;
  }

  return (
    <MapContainer
      style={{
        width: "100%",
        height: "100%",
        zIndex: "0",
      }}
      center={centerPos}
      zoom={8}
      closePopupOnClick={false}
    >
      <ChangeMap center={centerPos} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {_renderRoutes()}
      {popup.position !== undefined ? (
        <Popup position={centerPos} autoClose={false} closeButton={false}>
          <div className="font-bold font-ch text-lg">{popup.RouteName}</div>
          <div className="font-ch text-base font-normal">{popup.City}</div>
          <div className="font-ch text-base font-normal">{`${popup.RoadSectionStart} - ${popup.RoadSectionEnd}`}</div>
          <div className="font-ch text-base font-normal">{`全長：${popup.CyclingLength}m`}</div>
        </Popup>
      ) : null}
    </MapContainer>
  );
}

export default RouteMap;
