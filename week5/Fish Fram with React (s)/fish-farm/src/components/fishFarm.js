import React, { useState } from "react";
import fishData from "../data/fishFarmData";
import FishSaleLocation from "./fishSaleLocations";
import FishEntryDate from "./fishEntryDate";

export default function Fishes() {
  const [fishList, setFish] = useState({ data: fishData }); //   state fishFarm
  return (
    <div className="fishes">
      {fishList.data.map((fish) => (
        <div className="fishInfo">
          <p> Fish type : {fish.fishType}</p>
          <p> Price: {fish.price}</p>
          <p> Duration In Days: {fish.durationInDays}</p>
          <p>Item Weight In Grams: {fish.itemWeightInGrams}</p>
          <p>OriginCountry: {fish.originCountry} </p>
          <p>Season : {fish.season} </p>
          <p>StockVolumeInKg: {fish.stockVolumeInKg}</p>

          <FishSaleLocation locationList={fish.saleLocations} />
          <FishEntryDate dateList={fish.entryDate} />
        </div>
      ))}
    </div>
  );
}
