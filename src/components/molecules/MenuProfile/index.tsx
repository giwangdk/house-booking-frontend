/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Logout } from '../../../redux/authenticationSlice';
import { Button } from '../../atoms';
import { BecomeHost } from '../../organisms';
import Card from '../Card';
import { MenuProfileProps } from '../interface';
import style from './index.module.scss';

const MenuProfile: React.FC<MenuProfileProps> = ({
  show,
  className,
}): JSX.Element => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    Logout()(dispatch);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
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
        {user?.role !== 'host' && user?.role !== 'admin' && (
          <li onClick={handleShowModal}>Become Host</li>
        )}
        <li>
          <Button onClick={handleLogout}> Logout</Button>
        </li>
      </ul>
      <BecomeHost show={showModal} handleCloseModal={handleCloseModal} />
    </Card>
  );
};

export default MenuProfile;
