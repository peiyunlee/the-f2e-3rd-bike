import { Route, Switch } from "react-router";
import Announcement from "../components/News/Announcement";
import Activity from "../components/News/Activity";

function News({ news, location }) {
  return (
    <div className="flex justify-center text-black items-start min-height-75vh">
      <Switch>
        <Route path="/news/announcement/">
          <Announcement news={news} location={location} />
        </Route>
        <Route path="/news/activity/">
          <Activity news={news} />
        </Route>
      </Switch>
    </div>
  );
}

export default News;
