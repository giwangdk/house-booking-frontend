/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Logout, setUser } from '../../../redux/authenticationSlice';
import { getUserDetails } from '../../../services/service';
import { Button } from '../../atoms';
import { Container } from '../../organisms';
import MenuProfile from '../MenuProfile';
import NavProfile from '../NavProfile';
import style from './index.module.scss';

const Navbar = (): JSX.Element => {
  const { isLoggedIn } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoggedIn) {
    useQuery('get-user-detail', async () => {
      await getUserDetails().then((res) => {
        dispatch(setUser(res.data.data));
      });
    });
  }

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const classActive = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? style.navbar__menu__list__item__isActive
      : style.navbar__menu__list__item__link;

  return (
    <div className={style.navbar__wrapper}>
      <Container className={style.navbar}>
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
                <NavLink to="/login" className={classActive}>
                  Login
                </NavLink>
              </li>
              <li className={style.navbar__menu__list__item}>
                <NavLink to="/register" className={classActive}>
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className={style.list__item}>
                <NavLink to="/game" className={classActive}>
                  Games
                </NavLink>
              </li>

              <li className={style.list__item}>
                <NavProfile onClick={handleShowMenu} />
                <MenuProfile
                  show={showMenu}
                  className={style.list__item__menu}
                />
              </li>
            </>
          )}
        </ul>
      </Container>
    </div>
  );
};

export default Navbar;
