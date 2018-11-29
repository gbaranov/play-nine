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
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={this.state.numberOfStars}/>
          <Button />
          <Answer selectedNumbers={this.state.selectedNumbers}/>
        </div>
        <br />
        <Numbers selectedNumbers={this.state.selectedNumbers}
                  selectNumber={this.selectNumber}/>
      </div>
    );
  }
}

export default Game;
