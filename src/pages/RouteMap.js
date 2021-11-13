import { Route } from "react-router-dom";

import Map from "../components/Map";
import SearchBar from "../components/Roadmap/SearchBar";

function Roadmap() {

  return (
    <div className="Roadmap content-full relative mt-header">
      <div className="w-max m-0 h-full py-10 px-10 flex absolute z-10 shadow-default">
          <Route path="/route/district">
            <SearchBar />
          </Route>
      </div>
      <Map />
    </div>
  );
}

export default Roadmap;
