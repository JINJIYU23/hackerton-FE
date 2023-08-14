import React, { Component } from 'react';
import Input from '../Input/Input';

class NameInput extends Component {
  render() {
    const { handleInput, value } = this.props;
    return (
      <Input
        value={value}
        name='name'
        label='Name'
        type='text'
        maxLength='6'
        handleInput={handleInput}
      />
    );
  }
}

export default NameInput;
