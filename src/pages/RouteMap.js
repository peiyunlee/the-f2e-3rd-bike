import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import Map from "../components/Roadmap/RouteMap";
import SearchBar from "../components/Roadmap/SearchBar";
import * as storeApi from "../api/storeApi";
import * as routeApi from "../api/routeApi";
import * as storeActions from "../actions/auth";
import { useDispatch } from "react-redux";
import StoreRS from "../components/Roadmap/StoreRS";

import cityData from "../assets/json/city.json";

function Roadmap() {
  const dispatch = useDispatch();
  const { routes } = useSelector((store) => store.routeMapReducer);
  const { isLogin, user, storeRoutes } = useSelector(
    (store) => store.authReducer
  );

  useEffect(() => {
    if (isLogin) getStoredRoutes();
  }, [isLogin]);

  const getStoredRoutes = async () => {
    let result = await storeApi.getStoredRoutesByUserId(user.user_id);
    if (result.status === 200) {
      // dispatch(storeActions.setStoredRoutesData(result.routes.route_items));

      //get each route data from tdx api
      let arr = [];

      for (const item of result.routes.route_items) {
        const city = cityData.find((ele) => ele.CityName === item.city).City;
        const item_result = await routeApi.getSingleRouteResult(
          city,
          item.routename
        );
        item_result[0]["isStored"] = true;
        arr.push(item_result[0]);
      }
      dispatch(storeActions.setStoredRoutes(arr));
    }
  };

  return (
    <div className="Roadmap content-full relative mt-header">
      {isLogin ? (
        <div className="absolute left-1/2 z-10 w-max mt-10 grid gap-5 grid-flow-col -translate-x-50">
          <NavLink
            to="/route/district"
            className="btn block text-white bg-gray-default hover:bg-black"
            activeStyle={{
              backgroundColor: "#333333",
            }}
          >
            區域路線
          </NavLink>
          <NavLink
            to="/route/store"
            className="btn block text-white bg-gray-default hover:bg-black"
            activeClassName="bg-black"
          >
            常用路線
          </NavLink>
        </div>
      ) : null}
      <div className="w-max m-0 py-10 px-10 flex absolute z-10 shadow-default">
        <Switch>
          {isLogin ? null : <Redirect exact from="/route/store" to="/" />}
          <Route path="/route/district">
            <SearchBar />
          </Route>
          <Route path="/route/store">
            <StoreRS />
          </Route>
        </Switch>
      </div>
      <Switch>
        <Route path="/route/district">
          <Map routes={routes} />
        </Route>
        <Route path="/route/store">
          <Map routes={storeRoutes} />
        </Route>
      </Switch>
    </div>
  );
}

export default Roadmap;
