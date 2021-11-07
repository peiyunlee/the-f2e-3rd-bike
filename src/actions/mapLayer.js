import {
  REMOVE_ROUTE_DISTRICT,
  ADD_ROUTE_DISTRICT,
  ADD_ROUTE_DISTRICTLIST,
  REMOVE_ROUTE_DISTRICTLIST,
  SET_POPUP,
} from "../utils/constants";

export const removeDistrictRoute = (dispatch, idx) => {
  dispatch({
    type: REMOVE_ROUTE_DISTRICT,
    payload: idx,
  });
};

export const addDistrictRoute = (dispatch, item) => {
  dispatch({
    type: ADD_ROUTE_DISTRICT,
    payload: item,
  });
};

export const addDistrictRouteList = (dispatch, list) => {
  dispatch({
    type: ADD_ROUTE_DISTRICTLIST,
    payload: list,
  });
};

export const removeDistrictRouteList = (dispatch, list) => {
  dispatch({
    type: REMOVE_ROUTE_DISTRICTLIST,
    payload: list,
  });
};

export const setPopup = (dispatch, item) => {
  dispatch({
    type: SET_POPUP,
    payload: item,
  });
};
