import { Route, Switch } from "react-router";
import Announcement from "../components/News/Announcement";
import Activity from "../components/News/Activity";

function News({ news_activity, news_announcement }) {
  return (
    <div className="flex justify-center text-black items-start min-height-75vh pb-16">
      <Switch>
        <Route path="/news/announcement/">
          <Announcement news={news_announcement} />
        </Route>
        <Route path="/news/activity/">
          <Activity news={news_activity} />
        </Route>
      </Switch>
    </div>
  );
}

export default News;
