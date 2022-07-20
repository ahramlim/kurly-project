import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import styles from './HeaderNavigation.module.scss'

const HeaderNavigation = () => {
  const [loginText, setLoginText] = useState('로그아웃');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.removeItem('token');
    setLoginText('로그인');
    navigate('/');
  }
  return (
    <div className={styles.nav__container}>
      <div className={styles.delivery}>
        <Link to='/'>
          <img alt="delivery" src="https://res.kurly.com/pc/service/common/2011/delivery_210801.png" />
        </Link>
      </div>
      <nav>
        <ul className={styles.nav__menu}>
          <li>
            <Link to="/signup" className={styles.signUpColor}>
              회원가입
            </Link>
          </li>
          <li>
            {localStorage.getItem("token") ? (
              <span onClick={handleLogin}>{loginText}</span>
            ) : (
              <span onClick={() => navigate("/login")}>
                로그인
              </span>
            )}
          </li>
          <li>
            <Link to='#'>고객센터</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderNavigation;