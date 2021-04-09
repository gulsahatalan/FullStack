import React, { useState } from "react";

export default function Question(props) {
  return (
    <div className="question">
      <div className="next">
        <button onClick={props.nextQuestion}>Next</button>
        <button>Question: {props.step + 1} </button>
      </div>
      <div className="option-area">
        <div className="question-word">{props.list.deutch}</div>
        {props.list.turkish.map((answer) => (
          <div
            className="option"
            onClick={(event) => props.checkAnswers(event)}
          >
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
}
