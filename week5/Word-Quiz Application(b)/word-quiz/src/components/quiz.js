import React, { useState } from "react";
import Data from "../data/wordQuiz.json";
import Header from "./header";
import Skores from "./score";
import Result from "./result";
import Question from "./question";
import * as alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

export default function Quiz() {
  const [quiz, setQuiz] = useState({
    totalQuestion: 10,
    data: Data,
    step: 0,
  });
  const [score, setScore] = useState({
    trueScore: 0,
    falseScore: 0,
  });

  const next = () => {
    const { step, data } = quiz;
    setQuiz({
      step: step + 1,
      data: data,
      totalQuestion: 10,
    });
  };

  const checkAnswer = (event) => {
    const { step, data } = quiz;
    const { trueScore, falseScore } = score;
    if (event.target.innerHTML == data[step].answer) {
      setScore({
        trueScore: trueScore + 1,
        falseScore: falseScore,
      });
      alertify.alert(
        "Dogru cevabi buldunuz.Tebrikler.",
        "Dikkatlisin!",
        function () {
          alertify.success("GOOD!");
        }
      );
      next();
    } else {
      setScore({
        trueScore: trueScore,
        falseScore: falseScore + 1,
      });
      alertify.alert(
        "Daha dikkatli olmalisin!",
        "Hizli karar verme !",
        function () {
          alertify.error("Don`t give up!");
        }
      );
      next();
    }
  };
  console.log(quiz.totalQuestion);
  if (quiz.step == quiz.totalQuestion) {
    return <Result true={score.trueScore} />;
  } else {
    return (
      <div className="quiz">
        <Header />
        <Question
          list={quiz.data[quiz.step]}
          step={quiz.step}
          nextQuestion={next}
          checkAnswers={checkAnswer}
        />
        <Skores
          total={quiz.totalQuestion}
          true={score.trueScore}
          false={score.falseScore}
          list={quiz.data}
        />
      </div>
    );
  }
}
