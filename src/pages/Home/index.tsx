import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthProvider';
import ThemeButton from '../../components/ThemeButton';
import { AppPaths } from '../../router/routes';

import style from './Home.module.scss';

const HomePage = () => {
  const auth = useAuth();

  const headBackClickHandle = () => {
    auth.logout();
  };
  return (
    <div className={style.HomePageWrapper}>
      <div className={style.PageTitle}>Welcome to home page</div>
      <div className={style.HomePageBody}>
        <div>
          The site is currently under development Content will be updated over
          time. Come back anytime
        </div>
        <div>
          For now you can change color theme and take a look at login page
        </div>
      </div>
      <div className={style.ButtonContainer}>
        <ThemeButton />
        <button className={style.GoToLoginButton} onClick={headBackClickHandle}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
