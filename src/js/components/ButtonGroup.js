import React from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { dispatch } = this.props;
    dispatch(actions.getCityWeather(e.target.name));
  }

  render() {
    return (
      <div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-secondary" name="san diego" onClick={this.handleClick}>
            San Diego
          </button>
          <button type="button" className="btn btn-secondary" name="new york" onClick={this.handleClick}>
            New York
          </button>
          <button type="button" className="btn btn-secondary" name="washington dc" onClick={this.handleClick}>
            Washington DC
          </button>
          <button type="button" className="btn btn-secondary" name="london" onClick={this.handleClick}>
            London
          </button>
          <button type="button" className="btn btn-secondary" name="tokyo" onClick={this.handleClick}>
            Tokyo
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    store: store.cityInfo
  };
}

export default connect(mapStateToProps)(ButtonGroup);
