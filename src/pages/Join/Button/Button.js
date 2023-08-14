import React, { Component } from 'react';
import '../Button/Button.scss';

class Button extends Component {
  render() {
    const { name, label, signUp } = this.props;
    return (
      <div className='join-btn'>
        <label>{label}</label>
        <button onClick={signUp}>{name}</button>
      </div>
    );
  }
}

export default Button;
