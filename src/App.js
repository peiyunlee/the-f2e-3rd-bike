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
              <Home />
            <Footer />
          </Route>
          <Redirect exact from="/news" to="/news/announcement" />
          <Route path="/news">
              <Breadcrumb />
              <News />
            <Footer />
          </Route>
          <Redirect exact from="/route" to="/route/district" />
          <Route path="/route">
              <RouteMap />
          </Route>
          <Redirect exact from="/station" to="/station/rent" />
          <Route path="/station">
              <StationMap />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
