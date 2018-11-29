import React from 'react';

const Button = (props) => {
  return (
    <div className="col-2">
      <button className="btn btn-outline-success" disabled={props.selectedNumbers.length === 0}>Run</button>
    </div>
  );
}

export default Button;
