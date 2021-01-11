import React, { Component } from "react";
import Square from "./Square";

class Board extends Component {
  render() {
    const { squares, onClick } = this.props;
    return (
      <div>
        <div className='d-flex justify-content-center bd-highlight mb-3'>
          <Square onClick={onClick} value={squares[0]} row={0} />
          <Square onClick={onClick} value={squares[1]} row={1} />
          <Square onClick={onClick} value={squares[2]} row={2} />
        </div>
        <div className='d-flex justify-content-center bd-highlight mb-3'>
          <Square onClick={onClick} value={squares[3]} row={3} />
          <Square onClick={onClick} value={squares[4]} row={4} />
          <Square onClick={onClick} value={squares[5]} row={5} />
        </div>
        <div className='d-flex justify-content-center bd-highlight mb-3'>
          <Square onClick={onClick} value={squares[6]} row={6} />
          <Square onClick={onClick} value={squares[7]} row={7} />
          <Square onClick={onClick} value={squares[8]} row={8} />
        </div>
      </div>
    );
  }
}

export default Board;
