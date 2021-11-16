import { MapContainer, TileLayer } from "react-leaflet";

import "../map.css";

function StationMap() {
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
    </MapContainer>
  );
}

export default StationMap;
