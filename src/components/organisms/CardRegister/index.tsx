/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ICityResponse } from '../../../helpers/types';
import { RootState } from '../../../redux/store';
import { getCities } from '../../../services/service';
import { Button } from '../../atoms';
import { Dropdown, InputLabel } from '../../molecules';
import style from './index.module.scss';
import useForm from './useForm';
import validateInfo from './validate';

const CardRegister = (): JSX.Element => {
  const { values, handleChange, handleChangeDropdown, handleSubmit, errors } =
    useForm(validateInfo);

  const navigate = useNavigate();
  const { isLoading } = useSelector((state: RootState) => state.auth);
  const { data } = useQuery<ICityResponse>('get-cities', () =>
    getCities().then((res) => res.data),
  );

  const options = data?.data?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const handleNavigate = () => {
    navigate('/login');
  };
  return (
    <div className={style.card}>
      <h3>Register</h3>
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
        <label className={style.label}>City</label>
        <Dropdown values={options as any} onChange={handleChangeDropdown} />
        <Button type="submit" loading={isLoading}>
          Submit
        </Button>
      </form>
      <Button variant="primary__outline" onClick={handleNavigate}>
        Login
      </Button>
    </div>
  );
};

export default CardRegister;
