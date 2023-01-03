/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { ICityResponse } from '../../../../helpers/types';
import { getCities } from '../../../../services/service';
import { Button } from '../../../atoms';
import {
  Card,
  Dropdown,
  InputLabel,
  Modal,
  TextAreaLabel,
} from '../../../molecules';
import { ModalAddProps } from '../../interface';
import style from './index.module.scss';
import useForm from './useForm';
import validateInfo from './validate';

const ModalAddHouse: React.FC<ModalAddProps> = ({ show, handleCloseModal }) => {
  const {
    handleChange,
    handleChangeDropdown,
    handleSubmit,
    values,
    city,
    errors,
    setValues,
    setCity,
    isLoading,
  } = useForm(validateInfo, handleCloseModal);
  const { data } = useQuery<ICityResponse>('get-cities', () =>
    getCities().then((res) => res.data),
  );

  const options = data?.data?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  return (
    <Modal className={style.modal__house__detail} show={show}>
      <div className={style.modal__header}>
        <h6>Add House</h6>
        <Button
          onClick={handleCloseModal}
          border="pill"
          className={style.modal__header__button}
        >
          X
        </Button>
      </div>
      <form
        className={style.card__house__profile__content}
        onSubmit={handleSubmit}
      >
        <InputLabel
          label="Name"
          value={values?.name}
          name="name"
          onChange={handleChange}
          errors={errors?.name}
          message={errors?.name}
        />
        <InputLabel
          label="Price"
          value={values?.price}
          name="price"
          onChange={handleChange}
          errors={errors?.price}
          message={errors?.price}
        />
        <InputLabel
          label="Location"
          value={values?.location}
          name="location"
          onChange={handleChange}
        />
        <TextAreaLabel
          label="Description"
          value={values?.description}
          name="description"
          onChange={handleChange}
        />
        <label htmlFor="">City</label>
        <Dropdown
          values={options as any}
          value={city}
          onChange={handleChangeDropdown}
        />
        <Button loading={isLoading} type="submit">
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default ModalAddHouse;
