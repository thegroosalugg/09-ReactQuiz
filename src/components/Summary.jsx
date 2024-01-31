import complete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ answers }) {
  return (
    <div id="summary">
      <img src={complete} alt="quiz-over" />
      <h2>Quiz Finished</h2>
      <div id="summary-stats">
        <p>
          <span className="number"></span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number"></span>
          <span className="text">Wrong</span>
        </p>
        <p>
          <span className="number"></span>
          <span className="text">Missed</span>
        </p>
      </div>
      <ol>
        {answers.map((answer, index) => {
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={`user-answer`}>{answer ?? "Missed"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
