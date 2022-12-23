import React from 'react';
import {
  CardDetailProfile,
  CardProfile,
  CardWallet,
  Container,
} from '../../components';
import style from './index.module.scss';

const Profile = (): JSX.Element => {
  return (
    <div className={style.profile__page}>
      <Container className={style.profile__page__content}>
        <div className={style.profile__page__content__left}>
          <CardProfile />
          <CardWallet />
        </div>
        <div className={style.profile__page__content__right}>
          <CardDetailProfile />
        </div>
      </Container>
    </div>
  );
};

export default Profile;
