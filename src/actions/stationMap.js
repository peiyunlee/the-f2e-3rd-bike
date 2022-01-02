import {
  SET_STATIONS,
  SET_MAP_CENTER_POS,
  REFRESH_STATIONS
} from "../utils/actions/stationMap";

export const setStations = (infoList, availabilityList) => {
  return {
    type: SET_STATIONS,
    payload: { infoList: infoList, availabilityList: availabilityList },
  };
};

export const refreshStations = (infoList, availabilityList) => {
  return {
    type: REFRESH_STATIONS,
    payload: { infoList: infoList, availabilityList: availabilityList },
  };
};

export const setMapCenterPos = (pos) => {
  return {
    type: SET_MAP_CENTER_POS,
    payload: pos,
  };
};
