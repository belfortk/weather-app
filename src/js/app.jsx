import React from "react";
import CityInformation from "./components/CityInformation";
import SearchHistory from "./components/SearchHistory";
import ButtonGroup from "./components/ButtonGroup";
import SearchFieldComponent from "./components/SearchFieldComponent";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Weather App</h1>
          <h5>Because who actually likes getting caught in the rain?</h5>
        </div>

        <div className="row">
          <div className='col-md-12'>
          <ButtonGroup />
          </div>
          <div className='col-md-12'>
          <SearchFieldComponent />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <CityInformation />
          </div>
          <div className="col-md-6">
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
