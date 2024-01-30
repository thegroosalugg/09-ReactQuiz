import Answers from "./Answers";
import QuestionTImer from "./QuestionTImer";

export default function Question({ question, onSelectAnswer, onSkipAnswer, answerState, selectedAnswer }) {
  return (
    <div id="question">
      <QuestionTImer
        // key can be added to any HTML element and will cause this component to mount & dismount whenever the state of the key changes
        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      <h2>{question.text}</h2>
      <Answers
        answers={question.answers}
        answerState={answerState}
        selectedAnswer={selectedAnswer}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
