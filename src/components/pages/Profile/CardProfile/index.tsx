import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from '../../../../hooks/useAuth';
import { Logout } from '../../../../redux/authenticationSlice';
import { Avatar, Button } from '../../../atoms';
import { Card } from '../../../molecules';
import BecomeHost from '../../BecomeHost';
import { CardDetailProfileProps } from '../../interface';
import style from './index.module.scss';

const CardProfile: React.FC<CardDetailProfileProps> = () => {
  const { user, game } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleLogout = () => {
    Logout()(dispatch);
  };
  return (
    <Card className={style.card__profile}>
      <Avatar className={style.card__profile__avatar} />
      <div className={style.card__profile__profile}>
        <p>{user?.fullname}</p>
        <p>Total Games Played : {game?.total_games_played}</p>
        <p>Chance : {game?.chance}</p>
      </div>
      {user?.role !== 'host' && user?.role !== 'admin' && (
        <Button onClick={handleShowModal}>Become Host</Button>
      )}

      <BecomeHost show={showModal} handleCloseModal={handleCloseModal} />

      <Button onClick={handleLogout}> Logout</Button>
    </Card>
  );
};

export default CardProfile;
