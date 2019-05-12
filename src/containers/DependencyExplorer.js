import React, { Component } from "react";
import { Dropdown, Button, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import _ from "lodash";
import { loadingSuggestions, fetchSuggestions } from "../actions";

export class DependencyExplorerContainer extends Component {
  state = { inputTerm: null, selectedTerm: null };

  componentDidMount() {
    this.props.fetchSuggestions('');
  }

  onFormSubmit = event => {
    event.preventDefault();
    const searchTerm = (this.state.selectedTerm) ? this.state.selectedTerm : this.state.inputTerm;
    this.props.history.push(`/${searchTerm}`);
  };

  onChange = (first, second) => {
    this.setState({selectedTerm: second.value});
  }

  render() {
    const { suggestions } = this.props;

    const isLoading = suggestions === "loading" ? true : false;

    let options = [];

    if (this.state.inputTerm)
      options.push({
        key: this.state.inputTerm,
        value: this.state.inputTerm,
        text: this.state.inputTerm
      });

    if (suggestions !== "loading" && suggestions.length > 0) {
      for (const elem of suggestions) {
        if (elem.name !== this.state.inputTerm)
          options.push({ key: elem.name, value: elem.name, text: elem.name });
      }
    }

    const onSearchChangeDebounce = _.debounce(value => {
      this.props.loadingSuggestions();
      // this.onSearch(value);
      this.props.fetchSuggestions(value);
    }, 1000);

    const onSearchChange = (e, search) => {
      this.setState({ inputTerm: search.searchQuery });
      onSearchChangeDebounce(search.searchQuery);
    }

    return (
      <div className="ui container" style={{ marginTop: "29px" }}>
        <div style={{ textAlign: "center" }}>
          <Header as='h1'>Dependency Explorer</Header>
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
                  loading={isLoading}
                  options={options}
                  style={{
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px"
                  }}
                  onSearchChange={onSearchChange}
                  onChange={this.onChange}
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

const mapStateToProps = state => {
  return { suggestions: state.suggestions };
};

export default connect(
  mapStateToProps,
  { loadingSuggestions, fetchSuggestions }
)(DependencyExplorerContainer);
