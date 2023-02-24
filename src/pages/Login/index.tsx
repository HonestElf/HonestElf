import React from 'react';
import style from './Login.module.scss';

// import LoginImage from '../../assets/images/loginback.png';

const LoginPage = () => {
  return (
    <div className={style.LoginPageWrapper}>
      <div>
        <img src='LoginImage' alt='login background' />
      </div>
      <h1>This is the Login</h1>
    </div>
  );
};

export default LoginPage;
