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
      <div id="search-history" className="card">
        <div className="card-header">Search History</div>

        <ul className="list-group">
          {(this.props.store.prevCities.reverse().slice(0, 3)).map((city, i) => (
            <SearchHistoryItem
              name={ city.name }
              date={ city.date }
              time={ city.time }
              key={ i }
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
