import * as actions from "../utils/actions/auth";

let user = JSON.parse(localStorage.getItem("currentUser"));
let isLogin = true;
if (!user) {
  user = {
    access_token: "",
    user_id: undefined,
    username: "",
  };
  isLogin = false;
}

const initialState = {
  isLogin: isLogin,
  user: user,
  storeRoutes: [],
  // storeRoutesData: [],
};
console.log(initialState.user);

export function authReducer(state = initialState, action) {
  // let storeRoutesData = state.storeRoutesData;
  let storeRoutes = state.storeRoutes;
  let findIdx = -1;
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        isLogin: true,
        user: {
          access_token: action.payload.access_token,
          user_id: action.payload.user_id,
          username: action.payload.username,
        },
      };
    case actions.LOGOUT:
      return {
        isLogin: false,
        user: {
          access_token: "",
          user_id: undefined,
          username: "",
        },
        storeRoutes: [],
      };
    // case actions.SET_STORED_ROUTES_DATA:
    //   return {
    //     ...state,
    //     storeRoutesData: action.payload.routes,
    //   };
    // case actions.STORE_ROUTE_DATA:
    //   storeRoutesData.push({
    //     city: action.payload.city,
    //     routename: action.payload.routename,
    //   });
    //   return {
    //     ...state,
    //     storeRoutesData: storeRoutesData,
    //   };
    // case actions.REMOVE_STORED_ROUTE_DATA:
    //   findIdx = storeRoutesData.findIndex(
    //     (ele) =>
    //       ele.city === action.payload.route.city &&
    //       ele.routename === action.payload.route.routename
    //   );
    //   if (findIdx === -1) return state;
    //   return {
    //     ...state,
    //     storeRoutesData: [
    //       ...storeRoutesData.slice(0, findIdx),
    //       ...storeRoutesData.slice(findIdx + 1),
    //     ],
    //   };
    case actions.SET_STORED_ROUTES:
      return {
        ...state,
        storeRoutes: action.payload.routes,
      };
    case actions.STORE_ROUTE:
      storeRoutes.push(action.payload.route);
      return {
        ...state,
        storeRoutes: storeRoutes,
      };
    case actions.REMOVE_STORED_ROUTE:
      findIdx = storeRoutes.findIndex(
        (ele) =>
          ele.City === action.payload.route.city &&
          ele.RouteName === action.payload.route.routename
      );
      if (findIdx === -1) return state;
      return {
        ...state,
        storeRoutes: [
          ...storeRoutes.slice(0, findIdx),
          ...storeRoutes.slice(findIdx + 1),
        ],
      };
    default:
      return state;
  }
}
