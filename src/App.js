import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import ScrollToTop from "./components/ScrollToTop";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import Home from "./pages/Home";
import RouteMap from "./pages/RouteMap";
import News from "./pages/News";
import StationMap from "./pages/StationMap";

import { RMStoreProvider } from "./store/routeMap";
import { SMStoreProvider } from "./store/stationMap";
import { NewsStoreProvider } from "./store/newsData";
import Auth from "./pages/Auth";

function App() {
  const [showAuth, setshowAuth] = useState(false);
  return (
    <div className="App w-screen">
      <BrowserRouter>
        {showAuth ? <Auth setshowAuth={setshowAuth} /> : null}
        <ScrollToTop />
        <Header setshowAuth={setshowAuth}/>
        <Switch>
          <Route exact path="/">
            <NewsStoreProvider>
              <Home />
            </NewsStoreProvider>
            <Footer />
          </Route>
          <Redirect exact from="/news" to="/news/announcement" />
          <Route path="/news">
            <NewsStoreProvider>
              <Breadcrumb />
              <News />
            </NewsStoreProvider>
            <Footer />
          </Route>
          <Redirect exact from="/route" to="/route/district" />
          <Route path="/route">
            <RMStoreProvider>
              <RouteMap />
            </RMStoreProvider>
          </Route>
          <Redirect exact from="/station" to="/station/rent" />
          <Route path="/station">
            <SMStoreProvider>
              <StationMap />
            </SMStoreProvider>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
