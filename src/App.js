import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import Announcement from "./pages/Announcement";
import Activity from "./pages/Activity";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
            <Footer />
          </Route>
          <Route path="/news/announcement">
            <Breadcrumb />
            <Announcement />
            <Footer />
          </Route>
          <Route path="/news/activity">
            <Activity />
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
