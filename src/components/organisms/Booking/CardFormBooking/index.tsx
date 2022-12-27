/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { ICityResponse } from '../../../../helpers/types';
import useAuth from '../../../../hooks/useAuth';
import { RootState } from '../../../../redux/store';
import { getCities } from '../../../../services/service';
import { Button, Error } from '../../../atoms';
import { Card, Dropdown, InputLabel, InputPickup } from '../../../molecules';
import {
  DetailHouseProps,
  FormBookingProps,
} from '../../../molecules/interface';
import style from './index.module.scss';
import useForm from './useForm';
import validateInfo from './validate';

const CardFormBooking: React.FC<FormBookingProps> = ({
  house,
  currentPrice,
  totalPrice,
  pickupPrice,
  isReqPickup,
  handlePickupPrice,
}): JSX.Element => {
  const {
    values,
    handleChange,
    handleChangeDropdown,
    handleSubmit,
    errors,
    setValues,
    setCity,
    city,
  } = useForm(validateInfo, totalPrice as number, isReqPickup);

  const { isLoading } = useSelector((state: RootState) => state.auth);
  const { data } = useQuery<ICityResponse>('get-cities', () =>
    getCities().then((res) => res.data),
  );
  const options = data?.data?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const { user } = useAuth();
  console.log('city', city);

  useEffect(() => {
    if (user) {
      setValues({
        ...values,
        name: user.fullname as string,
        email: user.email as string,
      });
      setCity(user?.city?.id as number);
    }
  }, []);

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
        <label className={style.label}>City</label>
        <Dropdown
          values={options as any}
          value={options?.find((item) => item.value === city) as any}
          onChange={handleChangeDropdown}
        />
        <InputPickup
          pickupPrice={pickupPrice}
          handlePickupPrice={
            handlePickupPrice as (val: number, isPickup: boolean) => void
          }
          isReqPickup={isReqPickup}
          house={house}
          city={city}
        />
        <Button type="submit" loading={isLoading}>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default CardFormBooking;
