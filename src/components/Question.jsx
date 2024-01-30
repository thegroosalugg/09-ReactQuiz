import { useState } from "react";
import Answers from "./Answers";
import QuestionTImer from "./QuestionTImer";
import QUESTIONS from "../questions";

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    state: "",
  });

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      state: "selected",
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        state: QUESTIONS[index].answers[0] === answer ? "correct" : "wrong",
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  return (
    <div id="question">
      <QuestionTImer
        // key can be added to any HTML element and will cause this component to mount & dismount whenever the state of the key changes
        timeout={7000}
        onTimeout={onSkipAnswer}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answer.state}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
