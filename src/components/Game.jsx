import React, { Component } from "react";
import Board from "./Board";
import { calculateWinner } from "./helpers";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      active: "X",
      winner: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(row) {
    const boardCopy = [...this.state.squares];
    const winner = calculateWinner(this.state.squares);
    if (winner) this.setState({ winner: winner });
    if (winner || boardCopy[row]) return;
    boardCopy[row] = this.state.active;
    let current = this.state.active === "X" ? "O" : "X";
    console.log("Hello World");
    this.setState({
      squares: boardCopy,
      active: current,
    });
  }
  render() {
    return (
      <div>
        <div className='display-2 text-center'>Tic Tac Toe</div>
        <Board squares={this.state.squares} onClick={this.handleClick} />
        {this.state.winner !== null ? (
          <div className='display-4 text-center text-danger'>
            Winner: {this.state.active === "X" ? "O" : "X"}
          </div>
        ) : (
          <div className='display-4 text-center'>
            Next Player: {this.state.active}
          </div>
        )}

        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
