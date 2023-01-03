/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { Container } from '../../organisms';
import MenuProfile from '../MenuProfile';
import NavProfile from '../NavProfile';
import style from './index.module.scss';

const Navbar = (): JSX.Element => {
  const { isLoggedIn } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const classActive = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? style.navbar__menu__list__item__isActive
      : style.navbar__menu__list__item__link;

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      const navbar = document.getElementById('navbar')!;

      if (navbar) {
        if (window.pageYOffset > 0) {
          navbar.classList.add(style.navbar__scrolled);
        } else {
          navbar.classList.remove(style.navbar__scrolled);
        }
      }
    });
  }, []);

  return (
    <div className={style.navbar__wrapper} id="navbar">
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
                <NavLink to="/reservations" className={classActive}>
                  Reservations
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
