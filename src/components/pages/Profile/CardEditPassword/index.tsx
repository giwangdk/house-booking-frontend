import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Button } from '../../../atoms';
import { InputLabel } from '../../../molecules';
import { CardEditDetailProfileProps } from '../../interface';
import style from './index.module.scss';
import useForm from './useForm';

const CardEditPassword: React.FC<CardEditDetailProfileProps> = ({
  handleCloseEdit,
}) => {
  const { user } = useAuth();
  const { errors, values, handleChange, handleSubmit, isLoading } =
    useForm(handleCloseEdit);

  return (
    <div className={style.card__detail}>
      <h5>Edit Password</h5>
      <form className={style.card__register} onSubmit={handleSubmit}>
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
        <Button variant="secondary" type="submit" loading={isLoading}>
          Submit
        </Button>
      </form>

      <Button
        variant="tertiary"
        className={style.button}
        onClick={handleCloseEdit}
      >
        Close
      </Button>
    </div>
  );
};

export default CardEditPassword;
