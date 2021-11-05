import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import data_news from "./assets/news.json";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import News from "./pages/News";

data_news.sort(function (a, b) {
  const one = a.newsTime.split(" / ").join("");
  const two = b.newsTime.split(" / ").join("");
  return two - one;
});

function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home news={data_news} />
            <Footer />
          </Route>
          <Route
            exact
            path="/news/announcement"
            render={(routeProps) => (
              <>
                <Breadcrumb {...routeProps} />
                <News news={data_news} />
                <Footer />
              </>
            )}
          />
          <Route path="/roadmap/:type">
            <Roadmap />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
