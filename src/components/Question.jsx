import { useState } from "react";
import Answers from "./Answers";
import QuestionTImer from "./QuestionTImer";
import QUESTIONS from "../questions";

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    state: "",
  });

  let timer = 5000;

  if (answer.selectedAnswer) {
    timer = 2000;
  }

  function handleSelectAnswer(selectedAnswer) {
    setAnswer({
      selectedAnswer,
      state: "selected",
    });

    const isCorrect = QUESTIONS[index].answers[0] === selectedAnswer ? "correct" : "wrong"

    setTimeout(() => {
      setAnswer({
        selectedAnswer,
        state: isCorrect,
      });

      setTimeout(() => {
        onSelectAnswer({
          selectedAnswer,
          state: isCorrect,
        });
      }, 2000);
    }, 1000);
  }

  return (
    <div id="question">
      <QuestionTImer
        // key can be added to any HTML element and will cause this component to mount & dismount whenever the state of the key changes
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer ? null : onSkipAnswer}
        mode={answer.selectedAnswer ? "answered" : null}
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
