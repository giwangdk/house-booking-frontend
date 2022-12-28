import React from 'react';
import { Button } from '../../../atoms';
import { Card, InputLabel, Modal } from '../../../molecules';
import { DetailHouseProps } from '../../../molecules/interface';
import { ModalEditProps } from '../../interface';
import style from './index.module.scss';

const EditHouseHostDetail: React.FC<ModalEditProps> = ({
  house,
  show,
  handleCloseModal,
}) => {
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
      <div className={style.modal__house__detail__content}>
        <div className={style.modal__house__detail__content__item}>
          <InputLabel
            label="Max Guest"
            value={house?.detail?.max_guest}
            type="number"
          />
          <InputLabel
            label="Bedroom"
            value={house?.detail?.bedrooms}
            type="number"
          />
        </div>
        <div className={style.modal__house__detail__content__item}>
          <InputLabel type="number" label="Bed" value={house?.detail?.beds} />
          <InputLabel
            label="Bathroom"
            value={house?.detail?.baths}
            type="number"
          />
        </div>
      </div>
      <Button>Edit</Button>
    </Modal>
  );
};

export default EditHouseHostDetail;
