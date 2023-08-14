import React, { Component } from 'react';
// import Button from '../Button/Button';
import '../SignUp/Outer.scss';

class Outer extends Component {
  render() {
    const { label, eventLabel, image, alt, title } = this.props;
    return (
      <div className='other-join'>
        <label>{label}</label>
        <div className='outerApi'>
          <img src={image} alt={alt} />
          <p>{title}</p>
        </div>
        <label>{eventLabel}</label>
      </div>
    );
  }
}

export default Outer;
