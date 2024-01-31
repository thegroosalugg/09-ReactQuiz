import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

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
    handleSelectAnswer({
      selectedAnswer: "",
      state: "missed",
    });
  }, [handleSelectAnswer]);

  if (quizComplete) {
    return <Summary answers={userAnswers} />;
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
