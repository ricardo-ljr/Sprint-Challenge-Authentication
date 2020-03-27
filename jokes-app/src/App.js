import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import "./App.css";

// Import Components
import Register from "../src/components/register.js";
import Login from "./components/login";
import Jokes from "./components/jokesList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Jokes</h1>

        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/jokes" component={Jokes} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
