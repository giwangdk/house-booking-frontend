import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Button } from '../../atoms';
import { InputLabel } from '../../molecules';
import { CardEditDetailProfileProps } from '../interface';
import style from './index.module.scss';
import useForm from './useForm';

const CardEditDetailProfile: React.FC<CardEditDetailProfileProps> = ({
  handleCloseEdit,
}) => {
  const { user } = useAuth();
  const { errors, values, handleChange, handleSubmit } =
    useForm(handleCloseEdit);

  return (
    <React.StrictMode>
      <div className={style.card__detail}>
        <form className={style.card__register} onSubmit={handleSubmit}>
          <InputLabel
            label="Full Name"
            name="name"
            type="text"
            placeholder="Enter your Fullname"
            value={values.fullname}
            errors={errors?.fullname}
            onChange={handleChange}
            message={errors?.fullname}
          />
          <InputLabel
            label="Address"
            name="address"
            type="text"
            placeholder="Enter your Address"
            value={values?.address}
            onChange={handleChange}
            message={errors?.address}
          />
          <InputLabel
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your old password"
            value={values.password}
            onChange={handleChange}
            message={errors?.password}
          />
          <InputLabel
            label="New Password"
            name="newPassword"
            type="password"
            placeholder="Enter your New password"
            value={values.newPassword}
            onChange={handleChange}
            message={errors?.newPassword}
          />
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </React.StrictMode>
  );
};

export default CardEditDetailProfile;
