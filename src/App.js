import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Converter from "./Converter";
import ConvertedList from "./ConvertedList";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Converter} />
          <Route path="/list" component={ConvertedList} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
