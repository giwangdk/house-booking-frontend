import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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

    </div>
  );
};

export default Profile;
