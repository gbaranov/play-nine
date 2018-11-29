import React from 'react';
var _ = require('lodash');

const Numbers = (props) => {
  const numberClassName = (number) => {
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected'
    };
  };
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) =>
          <span onClick={() => props.selectNumber(number)} key={i} className={numberClassName(number)}>{number}</span>
        )}
      </div>
    </div>
  );
}

Numbers.list = _.range(1, 10);

export default Numbers;
