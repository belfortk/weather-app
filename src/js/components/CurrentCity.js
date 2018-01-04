import React from "react";
import { connect } from "react-redux";

class CurrentCity extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-12">
        <p>
          {
            this.props.store.icon ? (
            <img src={"https://api.openweathermap.org//img/w/" + this.props.store.icon + ".png"} />
          ) : (
            <span> <strong> Search/select a city </strong></span>
          )}
          {this.props.store.city}
        </p>
        <p>
          {" "}
          {this.props.store.lat} {this.props.store.lon}
        </p>
      </div>
    );
  }
}

function mapStoreToProps(store) {
  return {
    store: store.cityinfo
  };
}

export default connect(mapStoreToProps)(CurrentCity);
