import React from "react";
import { connect } from 'react-redux';

class WindSpeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="weather-info">wind spd
          <p> { this.props.store.windSpeed }</p>
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

export default connect(mapStoreToProps)(WindSpeed);

