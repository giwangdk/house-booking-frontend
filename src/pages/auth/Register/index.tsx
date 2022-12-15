import React from 'react';
import style from './index.module.scss';
import AuthLayout from '../../../components/layout/AuthLayout';
import { CardRegister } from '../../../components';

const Register = (): JSX.Element => {
  return (
    <div className={style.register__page}>
      <AuthLayout >
        <CardRegister />
      </AuthLayout>
    </div>
  );
};

export default Register;
