import React from "react"
import { connect } from 'react-redux';
import * as actions from "../actions";

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      city: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(actions.getCityWeather(this.state.city));
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input className="col-md-11" onChange= { this.handleChange }/>
        <button className="btn btn-secondary col-md-1" type="submit">
          Go!
        </button>
      </form>
    );
  }
}

function mapStateToProps(store) {
  return {
    store: store.cityInfo
  };
}

export default connect(mapStateToProps)(SearchField);
