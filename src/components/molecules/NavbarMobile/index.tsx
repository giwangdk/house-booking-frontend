/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { FaGamepad, FaHome, FaUser } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Container } from '../../organisms';
import MenuProfile from '../MenuProfile';
import NavProfile from '../NavProfile';
import style from './index.module.scss';
import NavItem from './NavItem';

const NavbarMobile = (): JSX.Element => {
  const { isLoggedIn } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={style.navbar__wrapper}>
      <Container className={style.navbar}>
        <NavItem path="/" icon={<FaHome />} />
        {isLoggedIn && (
          <>
            <NavItem path="/game" icon={<FaGamepad />} />
            <NavItem path="/profile" icon={<FaUser />} />
          </>
        )}
      </Container>
    </div>
  );
};

export default NavbarMobile;
