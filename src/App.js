import React from "react";
import { Router, Route } from "react-router-dom";

import DependencyExplorerContainer from "./containers/DependencyExplorer";
import PackageOverviewContainer from "./containers/PackageOverview";
import history from './utilities/history';

function App() {
  return (
    <Router history={history}>
        <Route path="/" exact component={DependencyExplorerContainer} />
        <Route path="/:packageName" component={PackageOverviewContainer} />
    </Router>
  );
}

export default App;
