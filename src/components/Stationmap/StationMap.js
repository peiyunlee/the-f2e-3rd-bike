import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
// import "../map.css";
import { StoreContext } from "../../store/stationMap";
import { useContext, useState, useEffect } from "react";
import { iconMore, iconLess, iconZero, iconNull } from "./MarkerIcon";

function StationMap({ isRent }) {
  const {
    state: { stations, mapCenterPos },
  } = useContext(StoreContext);
  const [centerPos, setcenterPos] = useState(mapCenterPos);

  useEffect(() => {
    setcenterPos(mapCenterPos);
  }, [mapCenterPos]);

  const _renderMarkers = () => {
    let list = [];
    stations.forEach((item) => {
      const position = [
        item.StationPosition.PositionLat,
        item.StationPosition.PositionLon,
      ];
      let icon = iconMore;
      let colorClassName = "bg-yellow-default";
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
            colorClassName = "bg-yellow-light";
          } else if (number > 5) {
            icon = iconMore;
            colorClassName = "bg-yellow-default";
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
            colorClassName = "bg-yellow-light";
          } else if (number > 5) {
            icon = iconMore;
            colorClassName = "bg-yellow-default";
          }
        }
      } else {
        icon = iconNull;
        colorClassName = "bg-gray-light";
        text[0] = textStatus[2];
      }

      list.push(
        <Marker
          position={position}
          icon={icon}
          key={`marker-${item.StationUID}`}
        >
          <Popup position={position} autoClose={true} closeButton={true}>
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

  function ChangeMap({ center }) {
    let map = useMap();
    if (center !== undefined) {
      map.panTo(center);
      setcenterPos(undefined)
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
      closePopupOnClick={true}
    >
      <ChangeMap center={centerPos} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>{_renderMarkers()}</MarkerClusterGroup>
    </MapContainer>
  );
}

export default StationMap;
