import { useState, useCallback } from "react";
import complete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import ProgressBar from "./ProgressBar";
import Answers from "./Answers";

export default function Quiz() {
  const [userAnswers, setuserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");
  const selectedIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizComplete = selectedIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(answer) {
      setAnswerState("answered");
      setuserAnswers((userAnswers) => {
        return [...userAnswers, answer];
      });

      setTimeout(() => {
        if (answer === QUESTIONS[selectedIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);

      // return () => {
      //   clearTimeout(timer)
      // }
    },
    [selectedIndex]
  );

  const skipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizComplete) {
    return (
      <div id="summary">
        <img src={complete} alt="quiz-over" />
        <h2>Quiz Finished</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <div id="questions">
        <ProgressBar
          // key can be added to any HTLM element and will cause this component to mount & dismount whenever the state of the key changes
          key={selectedIndex}
          timeout={4000}
          onTimeout={skipAnswer}
        />
        <h2>{QUESTIONS[selectedIndex].text}</h2>
        <Answers
          answers={QUESTIONS[selectedIndex].answers}
          answerState={answerState}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          onSelect={handleSelectAnswer}
        />
      </div>
    </div>
  );
}
