import { popup } from "leaflet";
import { createContext, useReducer } from "react";
import * as actions from "../utils/constants";

export const StoreContext = createContext();

const initialState = {
  routes: [],
  popup: {},
};

initialState.routes = initialState.routes.sort((a, b) => {
  return a.RouteName.localeCompare(b.RouteName, "zh-hant");
});

function reducer(state, action) {
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
    default:
      return state;
  }
}

export function MLStoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}
