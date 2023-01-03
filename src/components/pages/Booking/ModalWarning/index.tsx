import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { Button } from '../../../atoms';
import { Modal } from '../../../molecules';
import { ModalWarningProps } from '../../../pages/interface';
import style from './index.module.scss';

const ModalWarning: React.FC<ModalWarningProps> = ({
  show,
  handleCloseModal,
  handleExitModal,
}): JSX.Element => {
  const { house } = useSelector((state: RootState) => state.house);

  return (
    <Modal show={show}>
      <div className={style.modal__header}>
        <h6>Warning!</h6>
      </div>
      <div className={style.modal__info}>
        <h5>The price has changed to Rp. {house?.price}</h5>
        <p>Do you want to continue?</p>
      </div>
      <div className={style.modal__button}>
        <Button onClick={handleCloseModal}>Yes</Button>
        <Button onClick={handleExitModal}>No</Button>
      </div>
    </Modal>
  );
};

export default ModalWarning;
