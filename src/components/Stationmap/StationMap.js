import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

import "../map.css";
import { StoreContext } from "../../store/stationMap";
import { useContext } from "react";
import { iconMore, iconLess, iconZero, iconNull } from "./MarkerIcon";

function StationMap({ isRent }) {
  const {
    state: { stations, mapCenterPos },
  } = useContext(StoreContext);

  const _renderMarkers = () => {
    let list = [];
    stations.forEach((item) => {
      const position = [
        item.StationPosition.PositionLat,
        item.StationPosition.PositionLon,
      ];
      let icon = iconMore;
      let colorClassName = "bg-green-default";
      let textStatus = ["可借車輛", "可停車輛", "停止營運"];
      let text = [];

      if (item.ServiceStatus === 1) {
        if (isRent) {
          const number = item.AvailableRentBikes;
          text[0] = textStatus[0];
          text[1] = number;
          if (number <= 0) {
            icon = iconZero;
            colorClassName = "bg-red";
          } else if (number <= 5) {
            icon = iconLess;
            colorClassName = "bg-green-hover";
          } else if (number > 5) {
            icon = iconMore;
            colorClassName = "bg-green-default";
          }
        } else {
          const number = item.AvailableReturnBikes;
          text[0] = textStatus[1];
          text[1] = number;
          if (number <= 0) {
            icon = iconZero;
            colorClassName = "bg-red";
          } else if (number <= 5) {
            icon = iconLess;
            colorClassName = "bg-green-hover";
          } else if (number > 5) {
            icon = iconMore;
            colorClassName = "bg-green-default";
          }
        }
      } else {
        icon = iconNull;
        colorClassName = "bg-gray-light";
        text[0] = textStatus[2];
      }

      list.push(
        <Marker position={position} icon={icon}>
          <Popup position={position} autoClose={true} closeButton={false}>
            <div className="font-bold font-ch text-lg">
              {item.StationName.Zh_tw}
            </div>
            <div className="font-ch text-base font-normal">
              {item.StationAddress.Zh_tw}
            </div>
            <div className="font-ch text-base font-normal">{`更新時間：${item.UpdateTime.slice(
              0,
              -9
            ).replace("T", " ")}`}</div>
            <div
              className={`${colorClassName} py-1.5 px-4 w-max text-base text-white font-semibold flex items-center mt-2.5`}
            >
              {text[0]}
              {text[1] !== undefined ? (
                <span className="text-2xl ml-2.5">{text[1]}</span>
              ) : null}
            </div>
          </Popup>
        </Marker>
      );
    });
    return list;
  };

  return (
    <MapContainer
      style={{
        width: "100%",
        height: "100%",
        zIndex: "0",
      }}
      center={[25.09108, 121.5598]}
      zoom={8}
      closePopupOnClick={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {_renderMarkers()}
    </MapContainer>
  );
}

export default StationMap;
