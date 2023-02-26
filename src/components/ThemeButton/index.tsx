import React from 'react';

import { ThemeContext, themes } from '../../Theme/ThemeContext';

import ThemeDark from '../../assets/icons/dark.svg';
import ThemeLight from '../../assets/icons/light.svg';

import style from './ThemeButton.module.scss';

const ThemeButton = () => {
  const value = React.useContext(ThemeContext);

  const changeTheme = () => {
    if (value) {
      const { theme, setTheme } = value;

      if (theme === themes.light) {
        setTheme(themes.dark);
      } else {
        setTheme(themes.light);
      }
    }
  };

  return (
    <div className={style.ThemeButton} onClick={changeTheme}>
      <img
        src={value.theme === themes.dark ? ThemeLight : ThemeDark}
        alt={'Иконка темы'}
        className={style.CardIcon}
      />
      {value.theme === themes.dark ? 'Light mode' : 'Dark mode'}
    </div>
  );
};

export default ThemeButton;
