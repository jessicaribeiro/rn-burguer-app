import React from 'react';
import style from './style.css';

const NavigationItem = ({children, active, link}) => {
  return (
      <li className={style.NavigationItem}>
          <a href={link} className={active ? style.active : null}>{children}</a>
      </li>
  );
};

export default NavigationItem;