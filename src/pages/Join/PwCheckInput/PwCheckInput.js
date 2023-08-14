import React, { Component } from 'react';
import Input from '../Input/Input';

class PwCheckInput extends Component {
  render() {
    const { handleInput, value } = this.props;
    return (
      <Input
        value={value}
        name='pwCheck'
        label='Password Check'
        type='password'
        maxLength='16'
        handleInput={handleInput}
      />
    );
  }
}

export default PwCheckInput;
