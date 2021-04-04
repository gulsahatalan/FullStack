import React from "react";

export default function FishEntryDate(props) {
  return (
    <div className="date">
      <p>Entry Date: </p>
      <p>
        {props.dateList.getDate()}: {props.dateList.getMonth()}:{" "}
        {props.dateList.getFullYear()}
      </p>
    </div>
  );
}
