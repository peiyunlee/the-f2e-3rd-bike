import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import Announcement from "./pages/Announcement";
import Activity from "./pages/Activity";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import data_news from './assets/news.json'

data_news.sort(function (a, b) {
  const one = a.newsTime.split(' / ').join('')
  const two = b.newsTime.split(' / ').join('')
  return two - one;
})

function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home news={data_news}/>
            <Footer />
          </Route>
          <Route path="/news/announcement">
            <Breadcrumb />
            <Announcement news={data_news} />
            <Footer />
          </Route>
          <Route path="/news/activity">
            <Activity news={data_news} />
            <Footer />
          </Route>
          <Route path="/roadmap/:type">
            <Roadmap />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
