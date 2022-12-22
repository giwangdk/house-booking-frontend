import React from 'react';
import { Avatar, Button } from '../../atoms';
import style from './index.module.scss';
import { AiOutlineMenu } from 'react-icons/ai';

const NavProfile = (): JSX.Element => {
  return (
    <React.StrictMode>
      <Button className={style.nav__profile}>
        <div className={style.nav__profile__icon}>
          <AiOutlineMenu />
        </div>
        <Avatar className={style.nav__profile__avatar} />
      </Button>
    </React.StrictMode>
  );
};

export default NavProfile;
