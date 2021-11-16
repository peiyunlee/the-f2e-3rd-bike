import L from "leaflet";
import green_more from "../../assets/icon/marker/yellow.svg";
import green_less from "../../assets/icon/marker/yellow2.svg";
import green_zero from "../../assets/icon/marker/red.svg";
import green_null from "../../assets/icon/marker/gray.svg";

export const iconMore = new L.Icon({
  iconUrl: green_more,
  iconSize: new L.Point(60, 75),
});

export const iconLess = new L.Icon({
  iconUrl: green_less,
  iconSize: new L.Point(60, 75),
});

export const iconZero = new L.Icon({
  iconUrl: green_zero,
  iconSize: new L.Point(60, 75),
});

export const iconNull = new L.Icon({
  iconUrl: green_null,
  iconSize: new L.Point(60, 75),
});
