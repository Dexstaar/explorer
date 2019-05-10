import React, { Component } from "react";
import { Dropdown, Button } from "semantic-ui-react";



const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" }
];

export class DependencyExplorerContainer extends Component {

  onFormSubmit = event => {
    event.preventDefault();

    this.props.history.push('/packageoverview');
  };


  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <div style={{ textAlign: "center" }}>
          <h3>Dependency Explorer</h3>
        </div>
        <div style={{ marginTop: "10px" }}>
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <div className="ui action input">
                <Dropdown
                  floated="right"
                  fluid
                  search
                  selection
                  icon={null}
                  // loading
                  options={countryOptions}
                  style={{
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px"
                  }}
                />
                <Button primary>Search</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default DependencyExplorerContainer;
