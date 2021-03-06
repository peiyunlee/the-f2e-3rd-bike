import {
  SET_ROUTES,
  SET_POPUP,
  SET_POPUP_STORED,
  SET_MAP_CENTER_POS,
} from "../utils/actions/routeMap";

export const setRoutes = (list) => {
  return {
    type: SET_ROUTES,
    payload: list,
  };
};

export const setPopup = (item) => {
  return {
    type: SET_POPUP,
    payload: item,
  };
};

export const setPopupStored = (newStatus) => {
  return {
    type: SET_POPUP_STORED,
    payload: newStatus,
  };
};

export const setMapCenterPos = (pos) => {
  return {
    type: SET_MAP_CENTER_POS,
    payload: pos,
  };
};
