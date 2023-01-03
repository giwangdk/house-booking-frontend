import React from 'react';
import { Button } from '../../atoms';
import { InputLabel } from '../../molecules';
import style from './index.module.scss';
import useForm from './useForm';
import { useSelector } from 'react-redux';
import validateInfo from './validate';
import { RootState } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';

const CardLogin = (): JSX.Element => {
  const { values, handleChange, handleSubmit, errors } = useForm(validateInfo);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/register');
  };

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
          required
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
          required
        />
        <Button loading={isLoading}>Submit</Button>
      </form>
      <Button variant="primary__outline" onClick={handleNavigate}>
        Register
      </Button>
    </div>
  );
};

export default CardLogin;
