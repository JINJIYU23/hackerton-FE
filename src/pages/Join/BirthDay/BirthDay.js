import React, { Component } from 'react';

class BirthDay extends Component {
  render() {
    const { handleInput } = this.props;
    return (
      <div className='birthDay info'>
        <label>Birthday</label>
        <input
          name='year'
          type='text'
          placeholder='YYYY'
          maxLength='4'
          onChange={handleInput}
        />
        <input
          name='month'
          type='text'
          placeholder='MM'
          maxLength='2'
          onChange={handleInput}
        />
        <input
          name='date'
          type='text'
          placeholder='DD'
          maxLength='2'
          onChange={handleInput}
        />
      </div>
      // <li className='birthDay'>
      //   <label>{label}</label>
      //   <input type='text' placeholder='YYYY' maxLength='4' />
      //   <input type='text' placeholder='MM' maxLength='2' />
      //   <input type='text' placeholder='DD' maxLength='2' />
      // </li>
    );
  }
}

export default BirthDay;
