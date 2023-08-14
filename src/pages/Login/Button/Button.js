import React, { Component } from 'react';
import '../Button/Button.scss';

class Button extends Component {
  render() {
    const { name, label, signUpColor, findUserID, goToMain } = this.props;
    return (
      <div className='btn'>
        <label>{label}</label>
        <button className={signUpColor} onClick={goToMain}>
          {name}
        </button>
        <p>{findUserID}</p>
      </div>
    );
  }
}

export default Button;
