import React from 'react';

const Button = (props) => {
  let button;
  switch(props.answerIsCorrect) {
    case true:
    button = <button className="btn btn-outline-success">V</button>
    break;
    case false:
    button = <button className="btn btn-outline-danger">X</button>
    break;
    default:
    button = <button onClick={props.checkAnswer} className="btn btn-outline-primary" disabled={props.selectedNumbers.length === 0}>=</button>
    break;
  }
  return (
    <div className="col-2">
      {button}
    </div>
  );
}

export default Button;
