import React from 'react';
import { Button } from '../../../atoms';
import { InputLabel } from '../../../molecules';
import { CardEditDetailProfileProps } from '../../interface';
import style from './index.module.scss';
import useForm from './useForm';
import validateInfo from './validate';

const CardEditPassword: React.FC<CardEditDetailProfileProps> = ({
  handleCloseEdit,
}) => {
  const { errors, values, handleChange, handleSubmit, isLoading } = useForm(
    handleCloseEdit,
    validateInfo,
  );

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
          required
        />
        <InputLabel
          label="New Password"
          name="newPassword"
          type="password"
          placeholder="Enter your New password"
          value={values.newPassword}
          onChange={handleChange}
          message={errors?.newPassword}
          required
        />

        <InputLabel
          label="Confirm New Password"
          name="confirmPassword"
          type="password"
          placeholder="Enter your New password"
          value={values.confirmPassword}
          onChange={handleChange}
          message={errors?.confirmPassword}
          required
        />
        <Button
          variant="secondary"
          type="submit"
          loading={isLoading}
          disabled={isLoading}
        >
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
