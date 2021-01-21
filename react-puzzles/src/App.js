import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Puzzle4 from "./puzzle-4/Puzzle4";
import Puzzle5 from "./puzzle-5/Puzzle5";
import Puzzle6 from "./puzzle-6/Puzzle6";
import Puzzle7 from "./puzzle-7/Puzzle7";
import Puzzle8 from "./puzzle-8/Puzzle8";
import Puzzle9 from "./puzzle-9/Puzzle9";
import Puzzle10 from "./puzzle-10/Puzzle10";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/puzzle-4">
          <Puzzle4 />
        </Route>
        <Route path="/puzzle-5">
          <Puzzle5 />
        </Route>
        <Route path="/puzzle-6">
          <Puzzle6 />
        </Route>
        <Route path="/puzzle-7">
          <Puzzle7 />
        </Route>
        <Route path="/puzzle-8">
          <Puzzle8 />
        </Route>
        <Route path="/puzzle-9">
          <Puzzle9 />
        </Route>
        <Route path="/puzzle-10">
          <Puzzle10 />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
