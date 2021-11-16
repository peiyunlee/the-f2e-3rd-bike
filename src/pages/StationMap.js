import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Map from "../components/Stationmap/StationMap";
import SearchBar from "../components/Stationmap/SearchBar";

function Station() {
  return (
    <div className="Roadmap content-full relative mt-header">
      <div className="absolute left-1/2 z-10 w-max mt-10 grid gap-5 grid-flow-col -translate-x-50">
        <NavLink
          to="/station/rent"
          className="btn block text-white bg-gray-default hover:bg-black"
          activeStyle={{
            backgroundColor: "#333333",
          }}
        >
          借車
        </NavLink>
        <NavLink
          to="/station/return"
          className="btn block text-white bg-gray-default hover:bg-black"
          activeClassName="bg-black"
        >
          還車
        </NavLink>
      </div>
      <div className="w-max m-0 py-10 px-10 flex absolute z-10 shadow-default">
        <Route path="/station">
          <SearchBar />
        </Route>
      </div>
      <Map />
    </div>
  );
}

export default Station;
