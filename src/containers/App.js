import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestCats } from "../action";

import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";

import "./App.css";

const mapStateToProps = state => {
  return {
    searchField: state.searchCats.searchField,
    cats: state.requestCats.cats,
    isPending: state.requestCats.isPending
  };
};

//trigger the action
const mapDispatchToProps = dispatch => {
  return {
    onSearchChanges: event => dispatch(setSearchField(event.target.value)),
    onRequestCats: () => dispatch(requestCats())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestCats();
  }

  render() {
    const { cats, searchField, onSearchChanges, isPending } = this.props;
    const filterCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Kitties</h1>
        <SearchBox searchChange={onSearchChanges} />
        <Scroll>
          <ErrorBoundary>
            <CardList cats={filterCats} />;
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

//highrt order component/ function run another function
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
