import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <form className="input-group">
        <input
          placeholder="Get a five day forecast for your favorite city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChanged}
        />
        <span className="input-group-btn">
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={event => {
              console.log(this.state.term);
            }}
          >
            Search
          </button>
        </span>
      </form>
    );
  }

  onInputChanged = event => {
    this.setState({ term: event.target.value });
  };
}
