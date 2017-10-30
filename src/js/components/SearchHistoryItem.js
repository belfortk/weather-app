import React from "react";

const SearchHistoryItem = function (props){
    return (
      <li className="list-group-item">
        <div className="col-md-9 prev-city">{props.name}</div>
        <div className="col-md-3 prev-city-date-time">
          <p>
            {props.date}
          </p>
        </div>
      </li>
    );
  }


export default SearchHistoryItem;
