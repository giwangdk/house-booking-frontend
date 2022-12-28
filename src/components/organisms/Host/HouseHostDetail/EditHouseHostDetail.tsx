/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { ICityResponse } from '../../../../helpers/types';
import { getCities } from '../../../../services/service';
import { Button } from '../../../atoms';
import { Card, Dropdown, InputLabel, Modal } from '../../../molecules';
import { DetailHouseProps } from '../../../molecules/interface';
import { ModalEditProps } from '../../interface';
import style from './index.module.scss';
import useForm from './useForm';

const EditHouseHostDetail: React.FC<ModalEditProps> = ({
  house,
  show,
  handleCloseModal,
}) => {
  const { handleChange, handleSubmit, values, setValues, isLoading } = useForm(
    handleCloseModal,
    house,
  );

  useEffect(() => {
    setValues({
      max_guest: house?.detail?.max_guest as number,
      bedrooms: house?.detail?.bedrooms as number,
      baths: house?.detail?.baths as number,
      beds: house?.detail?.beds as number,
    });
  }, []);

  return (
    <Modal className={style.modal__house__detail} show={show}>
      <div className={style.modal__header}>
        <h6>Edit House Profile</h6>
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
            label="Beda"
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
    </Modal>
  );
};

export default EditHouseHostDetail;
