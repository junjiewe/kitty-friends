import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import "./App.css";
import ErrorBoundary from "../components/ErrorBoundary";
import { setSearchField } from "../action";

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

//trigger the action
const mapDispatchToProps = dispatch => {
  return {
    onSearchChanges: event => dispatch(setSearchField(event.target.value))
  };
};

class App extends Component {
  //smart component
  constructor() {
    super();
    this.state = {
      cats: []
    };
  }

  componentDidMount() {
    //get the user API from the web to get random users
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ cats: users }));
  }

  render() {
    const { cats } = this.state;
    const { searchField, onSearchChanges } = this.props;
    const filtercats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !cats.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Kitties</h1>
        <SearchBox searchChange={onSearchChanges} />
        <Scroll>
          <ErrorBoundary>
            <CardList cats={filtercats} />;
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
