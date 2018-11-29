import React from 'react';

const Answer = (props) => {
  return (
    <div className="col-5">
      <div className="card text-center">
        <div>
          {props.selectedNumbers.map((number, i) =>
            <span onClick={() => props.removeSelected(number)} key={i}>{number}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Answer;
