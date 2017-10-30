import React from "react";

const SearchHistoryItem = function (props){
    return (
      <li className="list-group-item">
        <div className="col-md-8 prev-city">{props.name}</div>
        <div className="col-md-4 prev-city-date-time">
          <p>
            {props.date}
          </p>
        </div>
      </li>
    );
  }


export default SearchHistoryItem;
