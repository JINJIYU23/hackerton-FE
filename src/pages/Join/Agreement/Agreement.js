import React, { Component } from 'react';
import Check from './Check/Check';
import CheckBox from './CheckBox/CheckBox';
import '../Agreement/Agreement.scss';

class Agreement extends Component {
  render() {
    const {
      idx,
      name,
      label,
      text,
      isAgreementRead,
      toggleAgreementRead,
      handleClickChange,
    } = this.props;

    return (
      <div className='Agreement'>
        <div className='agreement-title'>
          <h4>{name}</h4>
          <span
            className='read'
            onClick={() => toggleAgreementRead(`read${idx}`)}
          >
            READ
          </span>
        </div>
        {isAgreementRead && (
          <Check text={text} isAgreementRead={isAgreementRead} />
        )}
        <CheckBox
          idx={idx}
          label={label}
          handleClickChange={handleClickChange}
        />
      </div>
    );
  }
}
export default Agreement;
