import React, { Component } from 'react';
import Stars from './Stars.js';
import Button from './Button.js';
import Answer from './Answer.js';
import Numbers from './Numbers.js';

class Game extends Component {
  state = {
    selectedNumbers: [],
    numberOfStars: 1 + Math.floor(Math.random()*9)
  };

  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {return;}
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }
  removeSelected = (clickedNumber) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }));
  }
  render() {
    const {selectedNumbers, numberOfStars} = this.state;
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={numberOfStars}/>
          <Button selectedNumbers={selectedNumbers}/>
          <Answer selectedNumbers={selectedNumbers}
                  removeSelected={this.removeSelected}/>
        </div>
        <br />
        <Numbers selectedNumbers={selectedNumbers}
                  selectNumber={this.selectNumber}/>
      </div>
    );
  }
}

export default Game;
