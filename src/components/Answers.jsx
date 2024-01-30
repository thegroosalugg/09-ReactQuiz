import { useRef } from "react";

export default function Answers({ answers, answerState, selectedAnswer, onSelect }) {
  const shuffledAnswers = useRef(); // refs can be used to store values that load independently of state changes

  if (!shuffledAnswers.current) { // once a ref has been declared, the code will not run again
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass;

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              className={cssClass}
              onClick={() => onSelect(answer)}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
