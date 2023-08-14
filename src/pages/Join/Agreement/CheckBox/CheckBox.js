import React, { Component } from 'react';
import '../CheckBox/CheckBox.scss';

class CheckBox extends Component {
  render() {
    const { idx, label, handleClickChange } = this.props;
    return (
      <p className='check'>
        <label>{label}</label>
        <input
          name={`check${idx}`}
          type='checkbox'
          onClick={handleClickChange}
          value={true}
        ></input>
        <span>동의함</span>
      </p>
    );
  }
}

export default CheckBox;
