import React, { Component } from 'react';
import Input from '../Input/Input';

class EmailInput extends Component {
  render() {
    const { handleInput, value } = this.props;
    return (
      <Input
        value={value}
        name='email'
        type='email'
        label='E-mail'
        handleInput={handleInput}
      />
    );
  }
}

export default EmailInput;
