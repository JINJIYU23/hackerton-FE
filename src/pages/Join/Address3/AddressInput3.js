import React, { Component } from 'react';
import Input from '../Input/Input';

class AddressInput3 extends Component {
  render() {
    const { handleInput, value } = this.props;
    return (
      <Input
        value={value}
        name='addThr'
        label='Address3'
        type='text'
        maxLength='20'
        handleInput={handleInput}
      />
    );
  }
}

export default AddressInput3;
