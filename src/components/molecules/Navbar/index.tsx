/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Logout } from '../../../redux/authenticationSlice';
import { Button } from '../../atoms';
import { Container } from '../../organisms';
import style from './index.module.scss';

const Navbar = (): JSX.Element => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    Logout()(dispatch);
  };

  const classActive = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? style.navbar__menu__list__item__isActive
      : style.navbar__menu__list__item__link;

  return (
    <Container>
      <div
      className={style.navbar}
    >
      <div className={style.navbar__brand} onClick={() => navigate('/')}>
        <p>DigiHouse</p>
      </div>
      <ul className={style.navbar__menu}>
        <li>
          <NavLink to="/" className={classActive}>
            Home
          </NavLink>
        </li>
        {!isLoggedIn ? (
          <>
            <li className={style.navbar__menu__list__item}>
              <NavLink
                to="/login"
                className={classActive}
              >
                Login
              </NavLink>
            </li>
            <li className={style.navbar__menu__list__item}>
              <NavLink
                to="/register"
                className={classActive}
              >
                Register
              </NavLink>
            </li>
          </>
        ) : (
          <>
            {/* <li className={style.list__item}>
              <NavLink to="/transfer" className={classActive}>
                Transfer
              </NavLink>
            </li>
            <li className={style.list__item}>
              <NavLink to="/topup" className={classActive}>
                Topup
              </NavLink>
            </li>
            <li className={style.list__item}>
              <NavLink to="/games" className={classActive}>
                Games
              </NavLink>
            </li>
            <li className={style.navbar__menu__list__item}>
              {isLoggedIn && <Button onClick={handleLogout}>Logout</Button>}
            </li> */}
          </>
        )}
      </ul>
    </div>
    </Container>
  );
};

export default Navbar;
