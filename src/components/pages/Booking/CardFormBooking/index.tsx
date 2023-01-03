/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { ICityResponse } from '../../../../helpers/types';
import useAuth from '../../../../hooks/useAuth';
import { setPickupPrice, setTotalPrice } from '../../../../redux/houseSlice';
import { RootState } from '../../../../redux/store';
import { getCities } from '../../../../services/service';
import { Button } from '../../../atoms';
import { Card, Dropdown, InputLabel, InputPickup } from '../../../molecules';
import style from './index.module.scss';
import useForm from './useForm';
import validateInfo from './validate';

const CardFormBooking: React.FC = (): JSX.Element => {
  const {
    values,
    handleChange,
    handleChangeDropdown,
    handleSubmit,
    errors,
    setValues,
    setCity,
    city,
    isLoading,
  } = useForm(validateInfo);

  const { house, isReqPickup, pickupPrice, currentPrice } = useSelector(
    (state: RootState) => state.house,
  );
  const dispatch = useDispatch();
  const { data } = useQuery<ICityResponse>('get-cities', () =>
    getCities().then((res) => res.data),
  );
  const options = data?.data?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const { user, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn && user !== undefined) {
      setValues({
        ...values,
        name: user?.fullname as string,
        email: user?.email as string,
      });
      setCity(user?.city?.id as number);
    }
  }, []);

  useEffect(() => {
    dispatch(setPickupPrice(house?.city.id === city ? 100000 : 300000));
    isReqPickup &&
      dispatch(setTotalPrice(Number(pickupPrice) + Number(currentPrice)));
  }, [city]);

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
          required
        />
        {!isLoggedIn ? (
          <>
            <InputLabel
              label="Email"
              errors={errors?.email}
              name="email"
              type="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              message={errors?.email}
              required
            />
            <label className={style.label}>City</label>
            <Dropdown
              values={options as any}
              value={options?.find((item) => item.value === city) as any}
              onChange={handleChangeDropdown}
            />
          </>
        ) : (
          <>
            <InputLabel label="Email" value={user?.email} disabled />
            <InputLabel label="City" value={user?.city?.name} disabled />
          </>
        )}
        <InputPickup city={city as number} />
        <Button type="submit" loading={isLoading} disabled={isLoading}>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default CardFormBooking;
