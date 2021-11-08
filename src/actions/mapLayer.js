import {
  SET_ROUTES,
  SET_POPUP,
  SET_MAP_CENTER_POS
} from "../utils/constants";

export const setRoutes = (dispatch, list) => {
  dispatch({
    type: SET_ROUTES,
    payload: list,
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
