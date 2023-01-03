/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import {
  FaCalendarTimes,
  FaFileExcel,
  FaGamepad,
  FaHome,
  FaUser,
} from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Container } from '../../organisms';
import MenuProfile from '../MenuProfile';
import NavProfile from '../NavProfile';
import style from './index.module.scss';
import NavItem from './NavItem';
import jwt_decode from 'jwt-decode';
import Cookies from 'universal-cookie';

const NavbarMobile = (): JSX.Element => {
  const { isLoggedIn } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const cookie = new Cookies();

  const decodedToken: {
    user: {
      role: string;
    };
  } = jwt_decode(cookie.get('token'));

  return (
    <div className={style.navbar__wrapper}>
      <Container className={style.navbar}>
        <NavItem path="/" icon={<FaHome />} />
        {isLoggedIn && (
          <>
            <NavItem path="/game" icon={<FaGamepad />} />
            <NavItem path="/profile" icon={<FaUser />} />
            <NavItem path="/reservations" icon={<FaCalendarTimes />} />
            {decodedToken?.user.role === 'host' && (
              <NavItem path="/host/houses" icon={<FaFileExcel />} />
            )}

            {decodedToken?.user.role === 'admin' && (
              <NavItem path="/admin/houses" icon={<FaFileExcel />} />
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default NavbarMobile;
