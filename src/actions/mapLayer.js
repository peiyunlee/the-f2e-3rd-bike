import {
  SET_ROUTES,
  SET_POPUP,
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
