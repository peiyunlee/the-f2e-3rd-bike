import {
  SET_STATIONS,
  SET_POPUP,
  SET_MAP_CENTER_POS,
} from "../utils/actions/stationMap";

export const setStations = (dispatch, infoList, availabilityList) => {
  dispatch({
    type: SET_STATIONS,
    payload: { infoList: infoList, availabilityList: availabilityList },
  });
};

export const setPopup = (dispatch, item) => {
  dispatch({
    type: SET_POPUP,
    payload: item,
  });
};

export const setMapCenterPos = (dispatch, pos) => {
  dispatch({
    type: SET_MAP_CENTER_POS,
    payload: pos,
  });
};
