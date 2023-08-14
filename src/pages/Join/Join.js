import React, { Component } from 'react';
import Mobile from './Mobile/Mobile';
import IdInput from './IdInput/IdInput';
import PwInput from './PwInput/PwInput';
import PwCheckInput from './PwCheckInput/PwCheckInput';
import NameInput from './NameInput/NameInput';
import EmailInput from './EmailInput/EmailInput';
import BirthDay from './BirthDay/BirthDay';
import Agreement from './Agreement/Agreement';
import Button from './Button/Button';
import USER_INFO from './Agreement/USER_INFO';
import { URL } from './config';
import './Join.scss';
import ProfileInput from "./Profile/ProfileInput";
import AddressInput1 from "./Address1/AddressInput1";
import AddressInput2 from "./Address2/AddressInput2";
import AddressInput3 from "./Address3/AddressInput3";

class Join extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      year: '',
      month: '',
      date: '',
      id: '',
      pw: '',
      pwCheck: '',
      value: '',
      addOne: '',
      addTwo: '',
      addThr: '',
      profile: '',
      mobile: { num1: '', num2: '', num3: '' },
      checkList: { check1: false, check2: false, check3: false },
      isAgreementRead: { read1: false, read2: false, read3: false },
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };


  handleClickChange = e => {
    const { checkList } = this.state;
    const { name } = e.target;
    this.setState({
      checkList: {
        ...checkList,
        [name]: !checkList[name],
      },
    });
  };

  handleMobileInput = e => {
    const { mobile } = this.state;
    const { name, value } = e.target;
    this.setState({
      mobile: {
        ...mobile,
        [name]: value,
      },
    });
  };

  toggleAgreementRead = name => {
    const { isAgreementRead } = this.state;
    this.setState({
      isAgreementRead: { ...isAgreementRead, [name]: !isAgreementRead[name] },
    });
  };

  //정규식 표현 검사
  pwRegExpCheck = pw => {
    const num = /[0-9]/;
    const str = /[a-zA-Z]/;
    const special = /[~!@#$%^&*()_+|<>?:{}]/;

    num.test(pw);
    str.test(pw);
    special.test(pw);
  };

  //회원가입로직
  signUp = e => {
    e.preventDefault();
    const {
      id,
      pw,
      pwCheck,
      name,
      email,
      mobile,
      year,
      month,
      profile,
      addOne,
      addTwo,
      addThr,
      date,
      checkList,
    } = this.state;

    const formCheckList =
      name &&
      email.includes('@') &&
      email.includes('.com') &&
      year > 1920 &&
      year < 2007 &&
      month > 0 &&
      month < 13 &&
      date > 0 &&
      date < 32 &&
      id &&
      addOne &&
      addTwo &&
      addThr &&
      pw.length >= 8;

    const isCheckListValue = Object.entries(checkList).every(
      e => e[1] === true
    );

    if (formCheckList) {
      fetch(URL, {
        method: 'POST',
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          email: email,
          password1: pw,
          password2: pwCheck,
          name: name,
          nickname: id,
          phone:  `${mobile.num1}${mobile.num2}${mobile.num3}`,
          birthday: `${year}${month}${date}`,
          address1: addOne,
          address2: addTwo,
          address3: addThr,
        }),
      })
        .then(response => response.json())
        .then(response => {
          console.log("응답:", response);
          if (response.json === 201) {
            alert('회원가입 축하드립니다.');
            this.props.history.push('/member/login');
          } else if (pw) {
            alert('비밀번호 다시 확인하세요.');
          } else {
            alert('이미 가입된 아이디 입니다.');
          }
        });
    } else {
      alert('아이디를 다시 확인하세요');
    }
  };

  render() {
    const { id, pw, name, email, pwCheck , addOne, addTwo, addThr} = this.state;
    return (
      <main className='Join'>
        <div className='container'>
          <h1>Sign Up</h1>
          <form className='join-inner'>
            <EmailInput value={email} handleInput={this.handleInput} />
            <PwInput value={pw} handleInput={this.handleInput} />
            <PwCheckInput value={pwCheck} handleInput={this.handleInput} />
            <NameInput value={name} handleInput={this.handleInput} />
            <IdInput value={id} handleInput={this.handleInput} />
            <Mobile
              label='Mobile'
              handleMobileInput={this.handleMobileInput}
              options={[
                { id: '0', option: '선택' },
                { id: '1', option: '010' },
                { id: '2', option: '011' },
                { id: '3', option: '016' },
                { id: '4', option: '017' },
                { id: '5', option: '018' },
                { id: '6', option: '019' },
              ]}
            />
            <BirthDay handleInput={this.handleInput} />
            <AddressInput1 value={addOne} handleInput={this.handleInput}/>
            <AddressInput2 value={addTwo} handleInput={this.handleInput}/>
            <AddressInput3 value={addThr} handleInput={this.handleInput}/>
            <ProfileInput
                label='Profile'
            />
          </form>
          <div className='register-agreement'>
            {USER_INFO.map(data => {
              const { id, name, label, text } = data;
              return (
                <Agreement
                  key={id}
                  idx={id}
                  name={name}
                  label={label}
                  text={text}
                  handleClickChange={this.handleClickChange}
                  toggleAgreementRead={this.toggleAgreementRead}
                  isAgreementRead={this.state.isAgreementRead[`read${id}`]}
                />
              );
            })}
          </div>
          <Button name='SignUP' signUp={this.signUp} />
        </div>
      </main>
    );
  }
}

export default Join;
