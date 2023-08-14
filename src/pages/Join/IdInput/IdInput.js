import React, { Component } from 'react';
import Input from '../Input/Input';

class IdInput extends Component {
  constructor() {
    super();
    this.state = {
      isAvailableId: false,
    };
  }

  isFormBlur = () => {
    this.setState({
      isAvailableId: true,
    });
  };

  render() {
    const { handleInput, value } = this.props;
    return (
      <>
        <Input
          value={value}
          name='id'
          label='ID'
          type='text'
          maxLength='15'
          handleInput={handleInput}
          isFormBlur={this.isFormBlur}
        />
        {this.state.isAvailableId && value.length > 0 ? (
          <span>{`${value}는 사용가능한 아이디 입니다.`}</span>
        ) : (
          ''
        )}
      </>
    );
  }
}

export default IdInput;
