import React, { Component } from "react";
import { Link } from "react-router-dom";

export class PackageOverviewContainer extends Component {
  render() {
    return (
      <div>
        <div><Link to="/">Dependency Explorer</Link></div>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <div style={{ textAlign: "center" }}>
            <h3>Package Overview</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default PackageOverviewContainer;
