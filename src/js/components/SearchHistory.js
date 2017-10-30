import React from "react";
import SearchHistoryItem from "./SearchHistoryItem";
import { connect } from "react-redux";

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var count = 0
    return (
      <div className="card">
        <div className="card-header">Search History</div>

        <ul className="list-group">
          {(this.props.store.prevCities.reverse()).map(city => (
            <SearchHistoryItem
              name={ city.name }
              date={ city.date }
              time={ city.time }
            />

          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    store: store.searchInfo
  };
}

export default connect(mapStateToProps)(SearchHistory);
