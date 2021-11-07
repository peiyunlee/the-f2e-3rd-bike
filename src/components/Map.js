import { MapContainer, TileLayer, Popup, Polyline } from "react-leaflet";

import "./map.css";

const limeOptions = { color: "#FF9518", weight: 5 };

function Map({ layerRoutes,popup }) {
  const mapCenterPos = [25.028756758486, 121.509912913931];
  

  function _renderRoutes() {
    let list = [];
    layerRoutes.districtRoutes.forEach((route, idx) => {
      const positions = route.Geometry.slice(18, -2)
        .split(",")
        .map((ele) => ele.split(" ").reverse());
      list.push(
        <Polyline
          key={`mapRoute-polyline-${idx}`}
          pathOptions={limeOptions}
          positions={positions}
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
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {_renderRoutes()}
      <Popup position={popup.position}>
        <div className="font-bold font-ch text-lg">{popup.RouteName}</div>
        <div className="font-ch text-base font-normal">{popup.City}</div>
        <div className="font-ch text-base font-normal">{`${popup.RoadSectionStart} - ${popup.RoadSectionEnd}`}</div>
        <div className="font-ch text-base font-normal">{`全長：${popup.CyclingLength}m`}</div>
      </Popup>
    </MapContainer>
  );
}

export default Map;
