import React, { Component } from 'react';
import Input from '../Input/Input';

class ProfileInput extends Component {
  render() {
    return (
      <Input
        name='profile'
        label='Profile'
        type='file'
        accept='image/*'
      />
    );
  }
}

export default ProfileInput;
