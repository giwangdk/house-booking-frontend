import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Button } from '../../../atoms';
import { InputLabel } from '../../../molecules';
import { CardEditDetailProfileProps } from '../../interface';
import style from './index.module.scss';
import useForm from './useForm';

const CardEditDetailProfile: React.FC<CardEditDetailProfileProps> = ({
  handleCloseEdit,
}) => {
  const { user } = useAuth();
  const { errors, values, handleChange, handleSubmit, isLoading } =
    useForm(handleCloseEdit);

  return (
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

export default CardEditDetailProfile;
