import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Header, List } from "semantic-ui-react";

import { fetchDependencies } from "../actions";
import Spinner from '../components/Spinner';
import Messages from '../components/Messages';

export class PackageOverviewContainer extends Component {
  componentDidMount() {
    this.props.fetchDependencies(this.props.match.params.packageName);
  }

  renderDependencies(dependencies) {
    return dependencies.map((dependency, i) => {
      return <List.Item key={i}>{dependency}</List.Item>;
    });
  }

  render() {
    const { dependencies } = this.props;

    if (!dependencies) {
      return <div><Spinner/></div>;
    }

    if (dependencies === "ERROR") {
      return <Messages message='Can not get the dependency data' />
    }
    if (dependencies === "NODATA") {
      return <Messages message='No dependency data found' />
    }

    return (
      <div>
        <div>
          <Link to="/">Dependency Explorer</Link>
        </div>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <div style={{ textAlign: "center" }}>
            <Header as="h1">Package Overview</Header>
          </div>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Header as="h3">{this.props.match.params.packageName}</Header>
          </div>
          <div style={{ marginTop: "30px" }}>
            <p>
              Found {dependencies.length} dependencies for "
              {this.props.match.params.packageName}"
            </p>
          </div>
          <div style={{ marginTop: "30px" }}>
            <List bulleted>
              {this.renderDependencies(dependencies)}
            </List>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { dependencies: state.dependencies };
};

export default connect(
  mapStateToProps,
  { fetchDependencies }
)(PackageOverviewContainer);
