import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
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
          <Route path="/roadmap/:type">
            <Roadmap />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
