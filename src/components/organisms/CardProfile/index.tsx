import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Avatar } from '../../atoms';
import { Card } from '../../molecules';
import { CardDetailProfileProps } from '../interface';
import style from './index.module.scss';

const CardProfile: React.FC<CardDetailProfileProps> = () => {
  const { user, game } = useAuth();

  return (
    <Card className={style.card__profile}>
      <Avatar className={style.card__profile__avatar} />
      <div className={style.card__profile__profile}>
        <p>{user?.fullname}</p>
        <p>Total Games Played : {game?.total_games_played}</p>
        <p>Chance : {game?.chance}</p>
      </div>
    </Card>
  );
};

export default CardProfile;
