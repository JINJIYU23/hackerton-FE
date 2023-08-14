import React, {Component, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if(sessionStorage.getItem('user_key') === null) {
            setIsLogin(false)
            console.log('isLogin ?? :: ', isLogin)
            console.log(sessionStorage.removeItem('user_key'))
        }else{
            setIsLogin(true)
            console.log(sessionStorage.getItem('user_key'))
            console.log('isLogin ?? :: ', isLogin)
        }
    })

    return (
    <div className="navContainer">
        <div className="navBox">
            <ul className="topMainUl">
            <li className="topLi">
                    <Link to='/' className="topLink">
                        노인복지 스토어
                    </Link>
                </li>
            </ul>
        </div>
        <div className="navBox">
            <ul className="topUl">
                <li className="topLi">
                    <Link to='/' className="topLink">
                        홈
                    </Link>
                </li>
                <li className="topLi">
                    <Link to='/member/login' className="topLink">
                        로그인
                    </Link>
                </li>
                <li className="topLi">

                    <Link to='/cart' className="topLink">
                        마이페이지
                    </Link>
                </li>
                <li className="topLi">
                    <Link to='/cart' className="topLink">
                        장바구니
                    </Link>
                </li>
            </ul>
        </div>
    </div>
)
}

export default Nav;