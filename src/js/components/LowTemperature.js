import React from "react";
import { connect } from "react-redux";

class LowTemperature extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="weather-info">
          low temp
          <p> {this.props.store.lowTemp} </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    store: store.cityinfo
  };
}

export default connect(mapStateToProps)(LowTemperature);
