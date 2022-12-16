import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CardProfile, CardWallet, Container } from '../../components';
import useAuth from '../../hooks/useAuth';
import { getUser } from '../../redux/authenticationSlice';
import style from './index.module.scss';

const Profile = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUser()(dispatch);
  }, [dispatch]);

  const { user } = useAuth();

  console.log(user);

  return (
    <div className={style.profile__page}>
      <Container className={style.profile__page__content}>
        <div className={style.profile__page__content__left}>
          <CardProfile />
          <CardWallet />
        </div>
        <div className={style.profile__page__content__right}></div>
      </Container>
    </div>
  );
};

export default Profile;
