import React from 'react';
import style from './index.module.scss';
import { CardLogin, } from '../../../components';
import AuthLayout from '../../../components/layout/AuthLayout';

const Login:React.FC = () => {
  return (
    <div className={style.login__page}>
      <AuthLayout image="https://img.freepik.com/free-photo/vertical-shot-white-building-clear-sky_181624-4575.jpg?w=740&t=st=1671085588~exp=1671086188~hmac=9b11d68715aa02002c4334b4e51cc72ab81e81fb7ba35415773cdaba9056c898">
        <CardLogin />
      </AuthLayout>
    </div>
  );
};

export default Login;
