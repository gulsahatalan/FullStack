import React from "react";

export default function FishSaleLocation(props) {
  return (
    <div className="lokation">
      <p> SaleLocations: </p>
      {props.locationList.map((lokal) => (
        <div>{lokal}</div>
      ))}
    </div>
  );
}
