import { Route, Switch } from "react-router";
import Announcement from "../components/News/Announcement";
import Activity from "../components/News/Activity";
import NewsInfo from "../components/News/NewsInfo";

function News({ news_activity, news_announcement }) {
  return (
    <div className="mt-header flex justify-center text-black items-start min-height-75vh pb-20">
      <Switch>
        <Route path="/news/announcement">
          <Announcement news={news_announcement} />
        </Route>
        <Route path="/news/activity">
          <Activity
            news={news_activity.sort(function (a, b) {
              const one = a.activityTime.slice(0,14).split(" / ").join("");
              const two = b.activityTime.slice(0,14).split(" / ").join("");
              return two - one;
            })}
          />
        </Route>
        <Route path="/news/detail/:type/:id">
          <NewsInfo />
        </Route>
      </Switch>
    </div>
  );
}

export default News;
