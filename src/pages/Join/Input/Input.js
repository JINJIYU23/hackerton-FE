import React, { Component } from 'react';
import { URL } from '../config';
import '../Input/Input.scss';

class Input extends Component {
  render() {
    const {
      name,
      label,
      type,
      maxLength,
      handleInput,
      checkLabel,
      isFormBlur,
      value,
    } = this.props;

    return (
      <div className='userId info'>
        <label>{label}</label>
        <input
          value={value}
          type={type}
          name={name}
          maxLength={maxLength}
          onChange={handleInput}
          onBlur={isFormBlur}
        />
        <span>{checkLabel}</span>
      </div>
    );
  }
}

export default Input;
