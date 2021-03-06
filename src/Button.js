import React from 'react';

const Button = (props) => {
  let button;
  switch(props.answerIsCorrect) {

    case true:
      button =
      <button className="btn btn-success">
      V
      </button>;
    break;

    case false:
    button =
    <button className="btn btn-danger">
    X
    </button>;
    break;

    default:
      button = 
      <button className="btn btn-primary"
            onClick={props.checkAnswer}
            disabled={props.selectedNumbers.length === 0}>
      =
      </button>;
    break;
  }
  return (
    <div className="col-2">
      {button}
    </div>
  );
};

export default Button;
