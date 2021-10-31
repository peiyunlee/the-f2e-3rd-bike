import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Switch, Route } from "react-router";
import { NavLink } from "react-router-dom";

import Map from "../components/Map";
import RoundRS from "../components/RoadSearch/RoundRS";
import DistrictRS from "../components/RoadSearch/DistrictRS";
import LayerRS from "../components/RoadSearch/LayerRS";

function Roadmap() {
  const [showSearchBar, setshowSearchBar] = useState(true);

  function HandleSearchBar() {
    setshowSearchBar(!showSearchBar);
  }

  return (
    <div className="Roadmap content-full relative">
      <div className="w-max m-0 content-full h-full py-12 px-10 flex absolute z-10 shadow-default">
        <div
          className={
            !showSearchBar
              ? "bg-white text-black px-8 py-6 hidden"
              : "bg-white text-black px-8 py-6 flex flex-col"
          }
        >
          <NavLink
            to="/roadmap/close"
            className="mb-2 flex items-center"
            onClick={() => HandleSearchBar()}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
            <span className="ml-5">收合</span>
          </NavLink>
          <Switch>
            <Route exact path="/roadmap/round">
              <RoundRS />
            </Route>
            <Route exact path="/roadmap/layer">
              <LayerRS />
            </Route>
            <Route exact path="/roadmap/close"></Route>
            <Route path="/roadmap/:type">
              <DistrictRS />
            </Route>
          </Switch>
        </div>
        <div className="flex flex-col">
          <NavLink
            className={
              showSearchBar
                ? "btn rounded-l-none w-min bg-gray-default text-white mb-2.5 hover:btn-black"
                : "btn w-min bg-gray-default text-white mb-2.5 hover:btn-black"
            }
            to="/roadmap/district"
            activeClassName="btn-black"
            onClick={() => {
              if (!showSearchBar) HandleSearchBar();
            }}
          >
            區域路線
          </NavLink>
          <NavLink
            className={
              showSearchBar
                ? "btn rounded-l-none w-min bg-gray-default text-white mb-2.5 hover:btn-black"
                : "btn w-min bg-gray-default text-white mb-2.5 hover:btn-black"
            }
            to="/roadmap/round"
            activeClassName="btn-black"
            onClick={() => {
              if (!showSearchBar) HandleSearchBar();
            }}
          >
            環島路線
          </NavLink>
          <NavLink
            className={
              showSearchBar
                ? "btn rounded-l-none w-min bg-gray-default text-white mb-2.5 hover:btn-black"
                : "btn w-min bg-gray-default text-white mb-2.5 hover:btn-black"
            }
            to="/roadmap/layer"
            activeClassName="btn-black"
            onClick={() => {
              if (!showSearchBar) HandleSearchBar();
            }}
          >
            地圖圖層
          </NavLink>
        </div>
      </div>
      <Map />
    </div>
  );
}

export default Roadmap;
