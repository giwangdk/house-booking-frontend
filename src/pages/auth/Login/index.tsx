import React from 'react';
import style from './index.module.scss';
import { CardLogin, } from '../../../components';
import AuthLayout from '../../../components/layout/AuthLayout';
import Illustration from "../../../assets/svg/illustrations.svg"

const Login:React.FC = () => {
  return (
    <div className={style.login__page}>
      <AuthLayout image={Illustration} layout="login">
        <CardLogin />
      </AuthLayout>
    </div>
  );
};

export default Login;
