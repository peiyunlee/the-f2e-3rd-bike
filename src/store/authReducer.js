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
};
console.log(initialState.user);

export function authReducer(state = initialState, action) {
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
          ele.RouteName === action.payload.route.routename &&
          ele.City === action.payload.route.city
      );
      if (findIdx === -1) return state;
      console.log(action.payload.route)
      console.log(state.storeRoutes)
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
