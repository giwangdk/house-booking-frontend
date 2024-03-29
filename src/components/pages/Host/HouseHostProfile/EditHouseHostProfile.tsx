/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useQuery } from 'react-query';
import { ICityResponse, IHouse } from '../../../../helpers/types';
import { getCities } from '../../../../services/service';
import { Button } from '../../../atoms';
import { Dropdown, InputLabel, TextAreaLabel } from '../../../molecules';
import { CardEditHouseProps } from '../../interface';
import style from './index.module.scss';
import useForm from './useForm';

const EditHouseHostDetail: React.FC<CardEditHouseProps> = ({
  house,
  handleClose,
}) => {
  const {
    handleChange,
    handleChangeDropdown,
    handleSubmit,
    values,
    isLoading,
  } = useForm(handleClose, house as IHouse);
  const { data } = useQuery<ICityResponse>('get-cities', () =>
    getCities().then((res) => res.data),
  );

  const options = data?.data?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

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
        <InputLabel
          label="Name"
          value={values?.name}
          name="name"
          onChange={handleChange}
        />
        <InputLabel
          label="Price"
          value={values?.price}
          name="price"
          onChange={handleChange}
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
          value={house?.city.id}
          onChange={handleChangeDropdown}
        />
        <Button loading={isLoading}>Submit</Button>
      </form>
    </div>
  );
};

export default EditHouseHostDetail;
