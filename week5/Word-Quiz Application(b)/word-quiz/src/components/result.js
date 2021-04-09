import React from "react";
import * as alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

export default function Result(props) {
  alertify.alert("Oyun sona erdi.", "Tekrar oynamak ister misin?", function () {
    alertify.error("THE END!");
  });
  return (
    <div className="result">
      <p>THE END </p>
      <p>{props.true} Dogru cevabin var.</p>
    </div>
  );
}
