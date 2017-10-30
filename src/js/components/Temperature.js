import React from "react";
import { connect } from 'react-redux';

class Temperature extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="weather-info">temp
          <p>{ this.props.store.temp }</p>
        </div>
      </div>
    );
  }
}

function mapStoreToProps(store) {
  return {
    store: store.cityinfo
  };
}

export default connect(mapStoreToProps)(Temperature);
