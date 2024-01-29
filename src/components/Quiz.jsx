import { useState, useCallback } from "react";
import complete from "../assets/quiz-complete.png"
import QUESTIONS from "../questions";
import ProgressBar from "./ProgressBar";

export default function Quiz() {
  const [userAnswers, setuserAnswers] = useState([]);
  const selectedIndex = userAnswers.length;
  const quizComplete = selectedIndex === QUESTIONS.length;

  function handleSelectAnswer(answer) {
    setuserAnswers((userAnswers) => {
      return [...userAnswers, answer];
    });
  }

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
          <ProgressBar timeout={4000} onTimeout={() => handleSelectAnswer(null)} />
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
