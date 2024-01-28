import { useState } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnswers, setuserAnswers] = useState([]);
  const selectedIndex = userAnswers.length;

  function handleSeelectAnswer(answer) {
    setuserAnswers((userAnswers) => {
      return [...userAnswers, answer];
    });
  }

  return (
    <div id="quiz">
      <div id="questions">
        <ul id="answers">
          <h2>{QUESTIONS[selectedIndex].text}</h2>
          {QUESTIONS[selectedIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSeelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
