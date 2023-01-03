/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import {
  FaCalendarTimes,
  FaFileExcel,
  FaGamepad,
  FaHome,
  FaUser,
} from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import { Container } from '../../organisms';
import style from './index.module.scss';
import NavItem from './NavItem';
import jwt_decode from 'jwt-decode';
import Cookies from 'universal-cookie';
import { decodedTokenType } from '../interface';

const NavbarMobile = (): JSX.Element => {
  const { isLoggedIn } = useAuth();
  const [decodedToken, setDecodedToken] = useState<decodedTokenType>();

  const cookie = new Cookies();

  useEffect(() => {
    if (isLoggedIn) {
      const decodedToken: decodedTokenType = jwt_decode(cookie.get('token'));
      setDecodedToken(decodedToken);
    }
  }, []);

  return (
    <div className={style.navbar__wrapper} id="navbar">
      <Container className={style.navbar}>
        <NavItem path="/" icon={<FaHome />} />
        {!isLoggedIn && <NavItem path="/login" icon={<FaUser />} />}
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
