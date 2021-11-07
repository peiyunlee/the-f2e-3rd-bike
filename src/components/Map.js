import { MapContainer, TileLayer, Popup, Polyline } from "react-leaflet";
import { StoreContext } from "../store/mapLayer";
import { useContext } from "react";
import { setPopup } from "../actions/mapLayer";

// import "./map.css";

function Map({ layerRoutes, popup }) {
  const { dispatch } = useContext(StoreContext);

  const mapCenterPos = [25.028756758486, 121.509912913931];

  function _HandleClickItem(data) {
    const positions = data.Geometry.slice(18, -2)
      .split(",")
      .map((ele) => ele.split(" ").reverse());

    const result = {
      position: positions[parseInt(positions.length / 2)],
      RouteName: data.RouteName,
      City: data.City,
      RoadSectionStart: data.RoadSectionStart,
      RoadSectionEnd: data.RoadSectionEnd,
      CyclingLength: data.CyclingLength,
    };
    setPopup(dispatch, result);
  }

  function _renderRoutes() {
    let list = [];
    layerRoutes.districtRoutes.forEach((route, idx) => {
      const positions = route.Geometry.slice(18, -2)
        .split(",")
        .map((ele) => ele.split(" ").reverse());
      list.push(
        <Polyline
          key={`mapRoute-polyline-${idx}`}
          pathOptions={
            popup.RouteName !== route.RouteName
              ? { color: "#0D706D", weight: 5, smoothFactor: 5 }
              : { color: "#FF9518", weight: 5, smoothFactor: 10 }
          }
          positions={positions}
          eventHandlers={{
            click: () => _HandleClickItem(route),
          }}
        />
      );
    });
    return list;
  }

  return (
    <MapContainer
      style={{
        width: "100%",
        height: "100%",
        zIndex: "0",
      }}
      center={mapCenterPos}
      zoom={20}
      closePopupOnClick={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {_renderRoutes()}
      {popup.position !== undefined ? (
        <Popup position={popup.position} autoClose={false} closeButton={false}>
          <div className="font-bold font-ch text-lg">{popup.RouteName}</div>
          <div className="font-ch text-base font-normal">{popup.City}</div>
          <div className="font-ch text-base font-normal">{`${popup.RoadSectionStart} - ${popup.RoadSectionEnd}`}</div>
          <div className="font-ch text-base font-normal">{`全長：${popup.CyclingLength}m`}</div>
        </Popup>
      ) : null}
    </MapContainer>
  );
}

export default Map;
