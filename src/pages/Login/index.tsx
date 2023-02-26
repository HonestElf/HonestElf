import React from 'react';
import style from './Login.module.scss';

import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div className={style.LoginPageWrapper}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
