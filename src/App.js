import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import data_announcement from "./assets/json/news_announcement.json";
import data_activity from "./assets/json/news_activity.json";

import ScrollToTop from "./components/ScrollToTop";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import Home from "./pages/Home";
import RouteMap from "./pages/RouteMap";
import News from "./pages/News";

import { MLStoreProvider } from "./store/mapLayer";

data_announcement.sort(function (a, b) {
  const one = a.newsTime.split(" / ").join("");
  const two = b.newsTime.split(" / ").join("");
  return two - one;
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home news_announcement={data_announcement.slice(0,5)} news_activity={data_activity.slice(0,5)}  />
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
