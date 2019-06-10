import React, { useState } from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";

const QuizQuestion = props => {
  const [incorrectAnswer, setIncorrectAnswer] = useState(false);
  const handleClick = buttonText => {
    if (buttonText === props.quiz_question.answer) {
      props.showNextQuestionHandler();
    }
    setIncorrectAnswer(!incorrectAnswer);
  };

  return (
    <main>
      <section>
        <p>{props.quiz_question.instruction_text}</p>
      </section>
      <section className="buttons">
        <ul>
          {props.quiz_question.answer_options.map((option, index) => {
            return (
              <QuizQuestionButton
                key={index}
                button_text={option}
                clickHandler={handleClick}
              />
            );
          })}
        </ul>
      </section>
      {incorrectAnswer ? (
        <p className="error">Sorry, that's not right</p>
      ) : null}
    </main>
  );
};

export default QuizQuestion;
