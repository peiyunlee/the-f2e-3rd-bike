import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import Map from "../components/Stationmap/StationMap";
import SearchBar from "../components/Stationmap/SearchBar";

function Station() {
  const [isRent, setisRent] = useState(true);

  const _HandleClickLink = () => {
    setisRent(!isRent)
  }

  return (
    <div className="Roadmap content-full relative mt-header">
      <div className="absolute left-1/2 z-10 w-max mt-10 grid gap-5 grid-flow-col -translate-x-50">
        <NavLink
          to="/station/rent"
          className="btn block text-white bg-gray-default hover:bg-black"
          activeStyle={{
            backgroundColor: "#333333",
          }}
          onClick={_HandleClickLink}
        >
          借車
        </NavLink>
        <NavLink
          to="/station/return"
          className="btn block text-white bg-gray-default hover:bg-black"
          activeStyle={{
            backgroundColor: "#333333",
          }}
          onClick={_HandleClickLink}
        >
          還車
        </NavLink>
      </div>
      <div className="w-max m-0 py-10 px-10 flex absolute z-10 shadow-default">
        <Route path="/station">
          <SearchBar />
        </Route>
      </div>
      <Map isRent={isRent}/>
    </div>
  );
}

export default Station;
