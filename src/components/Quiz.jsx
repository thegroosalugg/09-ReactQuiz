import { useState, useCallback } from "react";
import complete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import Question from "./Question";

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
      <Question
        key={selectedIndex}
        question={QUESTIONS[selectedIndex]}
        answerState={answerState}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={skipAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
      />
    </div>
  );
}
