import { useState, useCallback } from "react";
import complete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import ProgressBar from "./ProgressBar";

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

  const shuffledAnswers = [...QUESTIONS[selectedIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="questions">
        <ul id="answers">
          <ProgressBar
          // key can be added to any HTLM element and will cause this component to mount & dismount whenever the state of the key changes
            key={selectedIndex}
            timeout={2000}
            onTimeout={skipAnswer}
          />
          <h2>{QUESTIONS[selectedIndex].text}</h2>
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
