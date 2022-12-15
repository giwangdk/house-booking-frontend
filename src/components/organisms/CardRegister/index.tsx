import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Button, Error } from '../../atoms';
import { InputLabel } from '../../molecules';
import style from './index.module.scss';
import useForm from './useForm';
import validateInfo from './validate';

const CardRegister = (): JSX.Element => {
  const { values, handleChange, handleSubmit, errors } = useForm(validateInfo);

  const { isLoading } = useSelector((state: RootState) => state.auth);

  return (
    <form className={style.card__register} onSubmit={handleSubmit}>
      <InputLabel
        label="Full Name"
        name="name"
        type="text"
        placeholder="Enter your Fullname"
        value={values.name}
        errors={errors?.name}
        onChange={handleChange}
        message={errors?.name}
      />
      <InputLabel
        label="Address"
        name="address"
        type="text"
        placeholder="Enter your Address"
        value={values.address}
        onChange={handleChange}
      />
      <InputLabel
        label="Email"
        errors={errors?.email}
        name="email"
        type="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        message={errors?.email}
      />
      <InputLabel
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        message={errors?.password}
      />
      <Button type='submit' loading={isLoading}>Submit</Button>
    </form>
  );
};

export default CardRegister;
