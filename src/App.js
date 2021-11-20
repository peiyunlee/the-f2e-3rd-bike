import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
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

function App() {
  return (
    <div className="App w-screen">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
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
