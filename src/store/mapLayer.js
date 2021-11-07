import { createContext, useReducer } from "react";
import * as actions from "../utils/constants";

export const StoreContext = createContext();

const initialState = {
  districtRoutes: [
    {
      checked: true,
      RouteName: "三元街(東北側1)",
      AuthorityName: "臺北市政府",
      CityCode: "TPE",
      City: "臺北市",
      RoadSectionStart: "和平西路2段98巷",
      RoadSectionEnd: "寧波西街",
      CyclingLength: 138,
      FinishedTime: "1021231",
      UpdateTime: "2021-11-05T00:00:44+08:00",
      Geometry:
        "MULTILINESTRING ((121.509912913931 25.028756758486,121.510477519076 25.0284152910771,121.51079469045 25.0282542774018,121.511369350755 25.0280592442443))",
    },
    {
      checked: true,
      RouteName: "三元街(東北側2)",
      AuthorityName: "臺北市政府",
      CityCode: "TPE",
      City: "臺北市",
      RoadSectionStart: "和平西路二段104巷",
      RoadSectionEnd: "和平西路二段98巷",
      CyclingLength: 267,
      FinishedTime: "1021231",
      UpdateTime: "2021-11-05T00:00:44+08:00",
      Geometry:
        "MULTILINESTRING ((121.507844929867 25.0305406081598,121.508198971795 25.0303170264937,121.508853437046 25.0297240234826,121.509352330098 25.0292233848301,121.509861944256 25.0287907797434))",
    },
  ],
  roundRoutes: [],
  popup: {
    position: [25,121],
    RouteName: "三元街(東北側2)",
    City: "臺北市",
    RoadSectionStart: "和平西路二段104巷",
    RoadSectionEnd: "和平西路二段98巷",
    CyclingLength: 367,
  },
};

initialState.districtRoutes = initialState.districtRoutes.sort((a, b) => {
  return a.RouteName.localeCompare(b.RouteName, "zh-hant");
});

function reducer(state, action) {
  let arr = state.districtRoutes;
  switch (action.type) {
    case actions.REMOVE_ROUTE_DISTRICT:
      return {
        ...state,
        districtRoutes: [
          ...arr.slice(0, action.payload),
          ...arr.slice(action.payload + 1),
        ],
      };
    case actions.ADD_ROUTE_DISTRICT:
      arr = [
        ...arr,
        {
          checked: true,
          RouteName: action.payload.RouteName,
          AuthorityName: action.payload.AuthorityName,
          CityCode: action.payload.CityCode,
          City: action.payload.City,
          RoadSectionStart: action.payload.RoadSectionStart,
          RoadSectionEnd: action.payload.RoadSectionEnd,
          CyclingLength: action.payload.CyclingLength,
          FinishedTime: action.payload.FinishedTime,
          UpdateTime: action.payload.UpdateTime,
          Geometry: action.payload.Geometry,
        },
      ];
      return {
        ...state,
        districtRoutes: [
          ...arr.sort((a, b) => {
            return a.RouteName.localeCompare(b.RouteName, "zh-hant");
          }),
        ],
      };
    case actions.ADD_ROUTE_DISTRICTLIST:
      arr = [
        ...arr,
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
        })),
      ];
      return {
        ...state,
        districtRoutes: [
          ...arr.sort((a, b) => {
            return a.RouteName.localeCompare(b.RouteName, "zh-hant");
          }),
        ],
      };
    case actions.REMOVE_ROUTE_DISTRICTLIST:
      action.payload.forEach((ele, idx) => {
        arr = arr.slice(0, ele.idx - idx).concat(arr.slice(ele.idx - idx + 1));
        console.log(ele.idx - idx);
      });
      return {
        ...state,
        districtRoutes: [...arr],
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
