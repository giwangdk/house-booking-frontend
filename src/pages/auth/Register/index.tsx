import React from 'react';
import style from './index.module.scss';
import AuthLayout from '../../../components/layout/AuthLayout';
import { CardRegister } from '../../../components';
import Illustration from "../../../assets/svg/illustration-register.svg"

const Register = (): JSX.Element => {
  return (
    <div className={style.register__page}>
      <AuthLayout layout='register' image={Illustration}>
        <CardRegister />
      </AuthLayout>
    </div>
  );
};

export default Register;
