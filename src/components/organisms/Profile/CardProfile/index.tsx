import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Avatar, Button } from '../../../atoms';
import { Card } from '../../../molecules';
import BecomeHost from '../../BecomeHost';
import { CardDetailProfileProps } from '../../interface';
import style from './index.module.scss';

const CardProfile: React.FC<CardDetailProfileProps> = () => {
  const { user, game } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
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
    </Card>
  );
};

export default CardProfile;
