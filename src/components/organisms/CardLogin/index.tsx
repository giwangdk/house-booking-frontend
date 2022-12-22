import React from 'react';
import { Button } from '../../atoms';
import { InputLabel } from '../../molecules';
import style from './index.module.scss';
import useForm from './useForm';
import { useSelector } from 'react-redux';
import validateInfo from './validate';
import { RootState } from '../../../redux/store';

const CardLogin = (): JSX.Element => {
  const { values, handleChange, handleSubmit, errors } = useForm(validateInfo);

  const { isLoading } = useSelector((state: RootState) => state.auth);

  return (
    <div className={style.card}>
      <h3>Login</h3>
      <form className={style.card__login} onSubmit={handleSubmit}>
        <InputLabel
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={values.email}
          errors={errors?.email}
          onChange={handleChange}
          message={errors?.email}
        />
        <InputLabel
          label="Password"
          name="password"
          type="password"
          errors={errors?.password}
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          message={errors?.password}
        />
        <Button loading={isLoading}>Submit</Button>
      </form>
    </div>
  );
};

export default CardLogin;
