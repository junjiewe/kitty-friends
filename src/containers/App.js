import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import "./App.css";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
  //smart component
  constructor() {
    super();
    this.state = {
      cats: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    //get the user API from the web to get random users
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ cats: users }));
  }

  onSearchChanges = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { cats, searchfield } = this.state;
    const filtercats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !cats.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Kitties</h1>
        <SearchBox searchChange={this.onSearchChanges} />
        <Scroll>
          <ErrorBoundary>
            <CardList cats={filtercats} />;
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
