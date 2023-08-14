import React, { Component } from 'react';
import './LoginInput.scss';

export default class LoginInput extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
    };
  }

  isCheckedValue = e => {
    this.setState({
      isChecked: true,
    });
  };

  render() {
    const { value, name, label, type, placeholder, handleInput, checkLabel } =
      this.props;

    return (
      <div className='input-inner'>
        <label>{label}</label>
        <input
          value={value}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleInput}
          onBlur={this.isCheckedValue}
        />

        {this.state.isChecked && value.length === 0 ? (
          <span>{checkLabel}</span>
        ) : (
          ' '
        )}
      </div>
    );
  }
}
