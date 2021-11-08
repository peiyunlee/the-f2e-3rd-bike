import { useContext } from "react";
import { Route } from "react-router-dom";

import Map from "../components/Map";
import SearchBar from "../components/SearchBar";

import { StoreContext } from "../store/mapLayer";

function Roadmap() {

  const {
    state: { routes, popup },
  } = useContext(StoreContext);

  return (
    <div className="Roadmap content-full relative">
      <div className="w-max m-0 h-full py-10 px-10 flex absolute z-10 shadow-default">
          <Route path="/roadmap/district">
            <SearchBar />
          </Route>
      </div>
      <Map routes={routes} popup={popup} />
    </div>
  );
}

export default Roadmap;
