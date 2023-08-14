import React, { Component, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from './LoginInput/LoginInput';
import Button from './Button/Button';
import Outer from './SignUp/Outer';
import { LOGIN_API } from '../Login/config.js';
import './Login.scss';


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pw: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = e => {
    e.preventDefault();
    const { username, email, pw } = this.state;
    if (
      (email.length > 4 || email.length < 30) &&
      (pw.length > 7 || pw.length <= 12)
    ) {
      fetch(LOGIN_API, {
        method: 'POST',
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: pw,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.key) {
            localStorage.setItem('Authorization', res.token);
            localStorage.setItem('email', res.email);
            sessionStorage.setItem('user_key', res.key);
            document.location.href = '/'
          } else if (res.message === 'INVALID_USER_EMAIL') {
            alert('이메일을 다시 확인해주세요');
            this.setState({ email: '', pw: '' });
          }
        });
    } else {
      alert('이메일 또는 비밀번호가 일치하지 않습니다.');
      this.setState({ email: '', pw: '' });
    }
  };

  goToSignUp = () => {
    this.props.history.push('join');
  };

  render() {
    return (
      <main className='Login'>
        <div className='container'>
          <h1>Login</h1>
          <form className='login-inner'>
            <LoginInput
              value={this.state.email}
              name='email'
              placeholder='이메일'
              type='email'
              label='Email'
              checkLabel='이메일 입력해주세요'
              handleInput={this.handleInput}
            />
            <LoginInput
              value={this.state.pw}
              name='pw'
              placeholder='비밀번호'
              type='password'
              label='Password'
              checkLabel='비밀번호를 입력해주세요'
              handleInput={this.handleInput}
            />
            <Button
              name='Login'
              findUserID='Forgotten ID or Password'
              goToMain={this.goToMain}
            />
          </form>
          <form className='join-inner'>
            <Link className='goTosignUp' to='/member/join'>
              <Button
                name='Sign Up'
                label='아직 회원이 아니세요?'
                signUpColor='signUpColor'
              />
            </Link>
          </form>
        </div>
      </main>
    );
  }
}
