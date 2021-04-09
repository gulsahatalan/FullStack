import React, { useState } from "react";

export default function Skores(props) {
  return (
    <div className="skores">
      <button>
        True Score: {props.true} / {props.total}
      </button>
      <button>
        False Score: {props.false} / {props.total}{" "}
      </button>
    </div>
  );
}
