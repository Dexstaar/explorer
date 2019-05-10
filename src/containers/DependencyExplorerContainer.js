import React, { Component } from "react";
import { Dropdown, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import _ from 'lodash';
import { loadingSuggestions, fetchSuggestions } from '../actions';

export class DependencyExplorerContainer extends Component {

  state = { isLoading: false };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.history.push('/packageoverview');
  };

  onSearch = (value) => {
    this.props.fetchSuggestions(value);
  }

  render() {
    const { suggestions } = this.props;

    const isLoading = (suggestions === 'loading')? true : false;

    let options = [];
    if(suggestions !== 'loading' && suggestions.length > 0) {
      options = suggestions.reduce((acc, elem) => {
        acc.push({ key: elem.name, value: elem.name, text: elem.name });
        return acc;
      }, []);
    }

    const onSearchChangeLodash = _.debounce((e, search) => {
      this.props.loadingSuggestions();
      this.setState({isLoading: true});
      this.onSearch(search.searchQuery);
    }, 1000);

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
                  onSearchChange={onSearchChangeLodash}
                  floated="right"
                  fluid
                  search
                  selection
                  // icon={null}
                  loading={isLoading}
                  options={options}
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

const mapStateToProps = state => {
  return { suggestions: state.suggestions };
};

export default connect(mapStateToProps, { loadingSuggestions, fetchSuggestions })(DependencyExplorerContainer);
