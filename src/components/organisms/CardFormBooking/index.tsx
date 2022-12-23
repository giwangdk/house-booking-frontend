import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Button, Error } from '../../atoms';
import { Card, InputLabel } from '../../molecules';
import style from './index.module.scss';
import useForm from './useForm';
import validateInfo from './validate';

const CardFormBooking = (): JSX.Element => {
  const { values, handleChange, handleSubmit, errors } = useForm(validateInfo);

  const { isLoading } = useSelector((state: RootState) => state.auth);

  return (
    <Card className={style.card__form_booking}>
      <h3 className={style.card__form_booking__title}>Your Information</h3>
      <form onSubmit={handleSubmit}>
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
          label="Email"
          errors={errors?.email}
          name="email"
          type="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          message={errors?.email}
        />
        <Button type="submit" loading={isLoading}>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default CardFormBooking;
