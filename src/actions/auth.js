import {
  LOGIN,
  LOGOUT,
  SET_STORED_ROUTES_DATA,
  STORE_ROUTE_DATA,
  REMOVE_STORED_ROUTE_DATA,
  SET_STORED_ROUTES,
  STORE_ROUTE,
  REMOVE_STORED_ROUTE
} from "../utils/actions/auth";

export const login = ({ access_token, user_id, username }) => {
  return {
    type: LOGIN,
    payload: { access_token, user_id, username },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

// export const setStoredRoutesData = (routes) => {
//   return {
//     type: SET_STORED_ROUTES_DATA,
//     payload: { routes },
//   };
// };

// export const storeRouteData = (route) => {
//   return {
//     type: STORE_ROUTE_DATA,
//     payload: { route },
//   };
// };

// export const removeStoredRouteData = (route) => {
//   return {
//     type: REMOVE_STORED_ROUTE_DATA,
//     payload: { route },
//   };
// };

export const setStoredRoutes = (routes) => {
  return {
    type: SET_STORED_ROUTES,
    payload: { routes },
  };
};

export const storeRoute = (route) => {
  return {
    type: STORE_ROUTE,
    payload: { route },
  };
};

export const removeStoredRoute = (route) => {
  return {
    type: REMOVE_STORED_ROUTE,
    payload: { route },
  };
};
