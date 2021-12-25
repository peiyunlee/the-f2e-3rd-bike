import { createContext, useReducer } from "react";
import * as actions from "../utils/actions/routeMap";

export const StoreContext = createContext();

const initialState = {
  routes: [],
  popup: {},
  mapCenterPos: [23.583234, 120.5825975],
};

initialState.routes = initialState.routes.sort((a, b) => {
  return a.RouteName.localeCompare(b.RouteName, "zh-hant");
});

export function routeMapReducer(state = initialState, action) {
  let arr = state.routes;
  switch (action.type) {
    case actions.SET_ROUTES:
      arr = [
        ...action.payload.map((item) => ({
          checked: true,
          RouteName: item.RouteName,
          AuthorityName: item.AuthorityName,
          CityCode: item.CityCode,
          City: item.City,
          RoadSectionStart: item.RoadSectionStart,
          RoadSectionEnd: item.RoadSectionEnd,
          CyclingLength: item.CyclingLength,
          FinishedTime: item.FinishedTime,
          UpdateTime: item.UpdateTime,
          Geometry: item.Geometry,
          positions: item.positions,
        })),
      ];
      return {
        ...state,
        routes: [
          ...arr.sort((a, b) => {
            return a.RouteName.localeCompare(b.RouteName, "zh-hant");
          }),
        ],
      };
    case actions.SET_POPUP:
      return {
        ...state,
        popup: action.payload,
      };
    case actions.SET_MAP_CENTER_POS:
      return {
        ...state,
        mapCenterPos: action.payload,
      };
    default:
      return state;
  }
}
