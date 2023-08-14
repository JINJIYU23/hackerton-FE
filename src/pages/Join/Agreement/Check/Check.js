import React, { Component } from 'react';
import './Check.scss';

class Check extends Component {
  render() {
    const { id, text } = this.props;
    return (
      <div className='agreementContent'>
        <p id={id}>{text}</p>
      </div>
    );
  }
}

export default Check;
