/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { IHouse } from '../../../../helpers/types';
import { Button } from '../../../atoms';
import { InputLabel } from '../../../molecules';
import { CardEditHouseProps } from '../../interface';
import style from './index.module.scss';
import useForm from './useForm';

const EditHouseHostDetail: React.FC<CardEditHouseProps> = ({
  house,
  handleClose,
}) => {
  const { handleChange, handleSubmit, values, isLoading } = useForm(
    handleClose,
    house as IHouse,
  );

  return (
    <div className={style.modal__house__detail}>
      <div className={style.modal__header}>
        <h6>Edit House Profile</h6>
        <Button
          onClick={handleClose}
          border="pill"
          className={style.modal__header__button}
        >
          X
        </Button>
      </div>
      <hr />
      <form
        className={style.card__house__profile__content}
        onSubmit={handleSubmit}
      >
        <div className={style.card__house__profile__content__item}>
          <InputLabel
            label="Max Guest"
            value={values.max_guest}
            type="number"
            name="max_guest"
            onChange={handleChange}
          />
          <InputLabel
            label="Bedrooms"
            value={values.bedrooms}
            type="number"
            name="bedrooms"
            onChange={handleChange}
          />
        </div>
        <div className={style.card__house__profile__content__item}>
          <InputLabel
            label="Beds"
            value={values.beds}
            type="number"
            name="beds"
            onChange={handleChange}
          />
          <InputLabel
            label="Bathrooms"
            value={values.baths}
            type="number"
            name="baths"
            onChange={handleChange}
          />
        </div>
        <Button loading={isLoading}>Submit</Button>
      </form>
    </div>
  );
};

export default EditHouseHostDetail;
