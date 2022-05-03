import React, { Component } from "react";
import "./SearchSection.css";

class SearchSection extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cityName: null,
//     };
//     this.handleSearchInput = this.handleSearchInput.bind(this);
//   }

  constructor() {
    super();
    this.state = {
      cityName: null,
    };
    //this.handleSearchInput = this.handleSearchInput.bind(this);
  }


  updateCityName(e) {
    this.setState({ cityName: e.target.value });
  }

  render() {
    return (
      <div className="mainSearchSection">
        <input
          className="inputLocation"
          placeholder="Enter City Name..."
          value={this.state.cityName}
          onChange={(e) => this.updateCityName(e)}
        />
        <button className="searchButton" onClick={this.handleSearchInput}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchSection;
