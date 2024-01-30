import { useState, useCallback } from "react";
import complete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import Question from "./Question";

export default function Quiz() {
  const [userAnswers, setuserAnswers] = useState([]);
  const selectedIndex = userAnswers.length;
  const quizComplete = selectedIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
    setuserAnswers((userAnswers) => {
      return [...userAnswers, answer];
    });
  }, []);

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
        index={selectedIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={skipAnswer}
      />
    </div>
  );
}
