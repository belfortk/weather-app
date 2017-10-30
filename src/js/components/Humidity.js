import React from "react";
import { connect } from "react-redux";

class Humidity extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="weather-info">humidity
          <p> {this.props.store.humidity }</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    store: store.cityinfo
  }
}

export default connect(mapStateToProps)(Humidity);
