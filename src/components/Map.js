import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";


const limeOptions = { color: "#FF9518", weight: 5 };

function Map(props) {
  const mapCenterPos = [25.033091, 121.535206];

  function _renderRoutes() {
    let list = [];
    props.routes.forEach((route) => {
      const positions = route.Geometry.slice(18, -2)
        .split(",")
        .map((ele) => ele.split(" ").reverse());
      list.push(<Polyline key={route.RouteName} pathOptions={limeOptions} positions={positions} />);
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
      <Marker position={mapCenterPos}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {_renderRoutes()}
    </MapContainer>
  );
}

export default Map;
