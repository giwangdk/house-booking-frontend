import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Avatar } from '../../atoms';
import { Card } from '../../molecules';
import { CardDetailProfileProps } from '../interface';
import style from './index.module.scss';

const CardProfile: React.FC<CardDetailProfileProps> = () => {
  const { user } = useAuth();

  return (
    <Card className={style.card__profile}>
      <Avatar />
      <div className={style.card__profile__profile}>
        <p>{user?.fullname}</p>
        <p>{user?.address}</p>
      </div>
    </Card>
  );
};

export default CardProfile;
