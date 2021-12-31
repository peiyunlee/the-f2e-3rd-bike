/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  MapContainer,
  TileLayer,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import heartIcon from "../../assets/icon/heart.png";
import heartIcon_filled from "../../assets/icon/heart_filled.png";

import "../map.css";
import * as mapActions from "../../actions/routeMap";
import * as storeActions from "../../actions/auth";
import * as storeApi from "../../api/storeApi";
import * as routeApi from "../../api/routeApi";
import cityData from "../../assets/json/city.json";
import { useLocation } from "react-router-dom";

function RouteMap({ routes }) {
  const location = useLocation()
  const { popup, mapCenterPos } = useSelector((store) => store.routeMapReducer);
  const { user, storeRoutes } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();
  const [centerPos, setcenterPos] = useState(mapCenterPos);

  let bounds = [];

  useEffect(() => {
    dispatch(mapActions.setRoutes([]));
  }, [location]);

  useEffect(() => {
    setcenterPos(mapCenterPos);
  }, [mapCenterPos]);

  useEffect(() => {
    dispatch(mapActions.setPopup({}));
  }, [routes]);

  useEffect(() => {
    dispatch(mapActions.setPopup({}));
  }, [user]);

  function _HandleClickRoute(e, data) {
    const positions = data.positions;
    const isStored = storeRoutes.some(
      (ele) => ele.City === data.City && ele.RouteName === data.RouteName
    );
    const result = {
      position: positions[parseInt(positions.length / 2)],
      RouteName: data.RouteName,
      City: data.City,
      RoadSectionStart: data.RoadSectionStart,
      RoadSectionEnd: data.RoadSectionEnd,
      CyclingLength: data.CyclingLength,
      isStored: isStored,
    };
    dispatch(mapActions.setPopup(result));
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

  const _handleHeartClick = async (status) => {
    if (!status) {
      const result = await storeApi.storeRoute(
        {
          store_id: user.user_id,
          city: popup.City,
          routename: popup.RouteName,
        },
        user.access_token
      );
      if (result.status === 200) {
        // dispatch(storeActions.storeRouteData(result.route));

        const city = cityData.find((ele) => ele.CityName === popup.City).City;
        const item_result = await routeApi.getSingleRouteResult(
          city,
          popup.RouteName
        );
        item_result[0]["isStored"] = true;
        dispatch(storeActions.storeRoute(item_result[0]));
        dispatch(mapActions.setPopupStored(true));
      }
    } else {
      const result = await storeApi.removeStoreRoute(
        {
          store_id: user.user_id,
          city: popup.City,
          routename: popup.RouteName,
        },
        user.access_token
      );
      console.log(result.route)
      if (result.status === 200) {
        // dispatch(storeActions.removeStoredRouteData(result.route));
        dispatch(storeActions.removeStoredRoute(result.route));
        dispatch(mapActions.setPopupStored(false));
      }
    }
  };

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
          <a
            className="right-3 top-3 absolute cursor-pointer"
            onClick={() => _handleHeartClick(!popup.isStored ? false : true)}
          >
            {!popup.isStored ? (
              <img src={heartIcon} alt="" />
            ) : (
              <img src={heartIcon_filled} alt="" />
            )}
          </a>
          <div className="font-bold font-ch text-lg mr-5">
            {popup.RouteName}
          </div>
          <div className="font-ch text-base font-normal">{popup.City}</div>
          <div className="font-ch text-base font-normal">{`${popup.RoadSectionStart} - ${popup.RoadSectionEnd}`}</div>
          <div className="font-ch text-base font-normal">{`全長：${popup.CyclingLength}m`}</div>
        </Popup>
      ) : null}
    </MapContainer>
  );
}

export default RouteMap;
