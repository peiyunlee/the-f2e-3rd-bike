import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import data_news from "./assets/json/news.json";

import ScrollToTop from "./components/ScrollToTop";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import Home from "./pages/Home";
import RouteMap from "./pages/RouteMap";
import News from "./pages/News";

import { MLStoreProvider } from "./store/mapLayer";
import { data } from "autoprefixer";

data_news.sort(function (a, b) {
  const one = a.newsTime.split(" / ").join("");
  const two = b.newsTime.split(" / ").join("");
  return two - one;
});

let data_announcement = []
let data_activity = []

data_news.forEach((ele) => {
  if (ele.type === "活動資訊")
    data_activity.push(ele)
  else
    data_announcement.push(ele)
})

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home news_announcement={data_announcement.slice(0, 5)} news_activity={data_activity.slice(0, 5)} />
            <Footer />
          </Route>
          <Redirect exact from="/news/" to="/news/announcement/" />
          <Route path="/news/">
            <Breadcrumb />
            <News news_activity={data_activity} news_announcement={data_announcement} />
            <Footer />
          </Route>
          <Redirect exact from="/route/" to="/route/district" />
          <Route path="/route/">
            <MLStoreProvider>
              <RouteMap />
            </MLStoreProvider>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
