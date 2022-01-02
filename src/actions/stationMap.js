import {
  SET_STATIONS,
  SET_MAP_CENTER_POS,
} from "../utils/actions/stationMap";

export const setStations = (infoList, availabilityList) => {
  return {
    type: SET_STATIONS,
    payload: { infoList: infoList, availabilityList: availabilityList },
  };
};

export const setMapCenterPos = (pos) => {
  return {
    type: SET_MAP_CENTER_POS,
    payload: pos,
  };
};
