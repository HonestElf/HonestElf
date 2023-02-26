import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AppPaths } from '../../router/routes';
import style from './ErrorPage.module.scss';

const ErrorPage = () => {
  const error = useRouteError() as { statusText: string; message: string };

  const navigate = useNavigate();
  const headBackClickHandle = () => {
    navigate(AppPaths.home);
  };

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button className={style.ErrorPageButton} onClick={headBackClickHandle}>
        Head home
      </button>
    </div>
  );
};

export default ErrorPage;
