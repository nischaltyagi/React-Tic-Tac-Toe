import React, { Component } from "react";
import "./Square.css";

class Square extends Component {
  state = {};
  render() {
    const { value, row, onClick } = this.props;
    return (
      <div
        className='p-4 bd-highlight border display-4 mx-2 bg-warning added text-center align-middle'
        onClick={() => onClick(row)}>
        {value}
      </div>
    );
  }
}

export default Square;
