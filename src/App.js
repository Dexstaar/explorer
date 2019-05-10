import React from "react";
import { Router, Route } from "react-router-dom";

import DependencyExplorerContainer from "./containers/DependencyExplorerContainer";
import PackageOverviewContainer from "./containers/PackageOverviewContainer";
import history from './utilities/history';

function App() {
  return (
    <Router history={history}>
        <Route path="/" exact component={DependencyExplorerContainer} />
        <Route path="/packageoverview" component={PackageOverviewContainer} />
    </Router>
  );
}

export default App;
