import React from "react";
import { connect } from 'react-redux';

class Pressure extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="weather-info">press
          <p> {this.props.store.pressure}</p>
        </div>
      </div>
    );
  }
}

function mapStoreToProps(store){
  return {
    store: store.cityinfo
  }
}

export default connect(mapStoreToProps)(Pressure);
