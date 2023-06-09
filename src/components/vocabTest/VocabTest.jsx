import React from 'react'
import "./VocabTest.css"

function VocabTest() {

  var correct = 1;

  function check(number){
    switch (number){
      case 1 : 
        if (1 === correct){
          return true;
        }
      break;
      case 2 :
        if ( 2  === correct){
            return true;
        }
        break;
      case 3 :
        if (3 === correct){
          return true;
        }
        break;
      case 4 :
        if (4 === correct){
          return true;
        }
        break;
      default: 
        return true;
    }
  }

  function action(test){
    if (check(test)){
      console.log(true);
    }
    else {
      console.log(false);
    }
  }
  return (
    <div>
      <div className="test-card">
        <div className="question-test">
          <h1>dort hin zu fahren würde mich interessieren</h1>
        </div>
        <div className="multiple-coice-container">
          <h1>Wähle den Richtigen Begriff</h1>
          <div className="multiple-choice-task-container">
            <div className="check-box" onClick={action}>
              
              <div className="number">
                1
              </div>
              <p>dort hin zu fahren würde mich mehr interesieren</p>
            
            </div>
            <div className="check-box" onClick={action(2)}> 
            <div className="number">
                2
              </div>
              <p>question</p>
            </div>
            <div className="check-box"  onClick={action(3)}>
            <div className="number">
                3
              </div>
              <p>dort hin zu fahren würde mich mehr interesieren</p>
            </div>
            <div className="check-box"  onClick={action(4)}>
            <div className="number">
                4
              </div>
              <p>question</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VocabTest