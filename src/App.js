import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddTask } from "./components/AddTask";
import { EditTask } from "./components/EditTask";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddTask} />
            <Route path="/edit/:id" component={EditTask} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App
