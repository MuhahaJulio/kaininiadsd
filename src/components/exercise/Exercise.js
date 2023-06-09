import React, { useState } from "react";
import "./Exercise.css";
import { AiOutlineSend } from "react-icons/ai";

function Exercise() {
  const [answer, setAnswer] = useState("");
  var correct = "Hallo";

  function check(answerI) {
    if (answerI === correct) {
      alert("Correct");
    } else {
      alert("wrong");
    }
  }

  function action() {
    check(answer);
  }
  function handle(e) {
    if (e.key === "Enter") {
      action();
    }
    return false;
  }
  function getAnswer(val) {
    setAnswer(val.target.value);
  }
  return (
    <>
      <div className="tasks">
        <div className="question">
          <h1 className="question-head">Hello</h1>
        </div>
        <div className="answer">
          <input
            type="text"
            name=""
            id=""
            className="question-input"
            placeholder="Answer"
            onChange={getAnswer}
            onKeyDown={handle}
          />

          <div className="submit-container" onClick={action}>
            <AiOutlineSend className="submit-icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Exercise;
