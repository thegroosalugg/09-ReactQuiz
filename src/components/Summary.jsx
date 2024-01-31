import complete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ answers }) {
  const results = answers.reduce(
    (acc, answer) => {
      acc[answer.state] += 1;
      return acc;
    },
    { correct: 0, wrong: 0, missed: 0 }
  );

  return (
    <div id="summary">
      <img src={complete} alt="quiz-over" />
      <h2>Quiz Finished</h2>
      <div id="summary-stats">
      {Object.entries(results).map(([state, count]) => (
          <p key={state}>
            <span className="number">{Math.round(count / 7 * 100)}%</span>
            <span className="text">{state}</span>
          </p>
        ))}
      </div>
      <ol>
        {answers.map((answer, index) => {
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={`user-answer ${answer.state}`}>{answer.selectedAnswer || "Missed"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
