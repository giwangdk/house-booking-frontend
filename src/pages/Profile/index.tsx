import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  CardDetailProfile,
  CardProfile,
  CardWallet,
  Container,
} from '../../components';
import useAuth from '../../hooks/useAuth';
import { getUser, getWallet } from '../../redux/authenticationSlice';
import style from './index.module.scss';

const Profile = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUser()(dispatch);
    getWallet()(dispatch);
  }, [dispatch]);

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
