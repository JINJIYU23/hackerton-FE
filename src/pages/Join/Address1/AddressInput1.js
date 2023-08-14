import React, { Component } from 'react';
import Input from '../Input/Input';

class AddressInput2 extends Component {
  render() {
    const { handleInput, value } = this.props;
    return (
      <Input
        value={value}
        name='addOne'
        label='Address1'
        type='text'
        maxLength='20'
        handleInput={handleInput}
      />
    );
  }
}

export default AddressInput2;
