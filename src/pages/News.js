import { Route, Switch } from "react-router";
import Announcement from "../components/News/Announcement";
import Activity from "../components/News/Activity";
import NewsInfo from "../components/News/NewsInfo";
import { useContext } from "react";
import { StoreContext } from "../store/newsData";

import { NewsStoreProvider } from "../store/newsData";

function News() {

  const {
    state: { news_announcement, news_activity },
  } = useContext(StoreContext);
  return (
    <div className="flex justify-center text-black items-start min-height-75vh pb-20">
      <Switch>
        <Route path="/news/announcement">
          <Announcement news={news_announcement} />
        </Route>
        <Route path="/news/activity">
          <Activity
            news={news_activity.sort(function (a, b) {
              const one = a.activityTime.slice(0, 14).split(" / ").join("");
              const two = b.activityTime.slice(0, 14).split(" / ").join("");
              return two - one;
            })}
          />
        </Route>
        <Route path="/news/detail/:type/:id">
          <NewsStoreProvider>
            <NewsInfo />
          </NewsStoreProvider>
        </Route>
      </Switch>
    </div>
  );
}

export default News;
