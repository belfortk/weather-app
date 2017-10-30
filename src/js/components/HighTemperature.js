import React from "react";
import { connect } from 'react-redux';

class HighTemperature extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="weather-info">hi temp
        <p>{ this.props.store.highTemp }</p></div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    store: store.cityinfo
  }
}
export default connect(mapStateToProps)(HighTemperature);
