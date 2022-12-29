/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Logout } from '../../../redux/authenticationSlice';
import { Button } from '../../atoms';
import Card from '../Card';
import { MenuProfileProps } from '../interface';
import style from './index.module.scss';

const MenuProfile: React.FC<MenuProfileProps> = ({
  show,
  className,
}): JSX.Element => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    Logout()(dispatch);
  };

  if (!show) {
    return <></>;
  }

  const classProps = classNames(style.menu__profile, className);

  return (
    <Card className={classProps}>
      <ul>
        <li>
          <Link to="/profile"> MyProfile</Link>
        </li>

        <li>
          <Button onClick={handleLogout}> Logout</Button>
        </li>
      </ul>
    </Card>
  );
};

export default MenuProfile;
