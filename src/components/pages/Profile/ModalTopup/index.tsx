import React from 'react';
import { Button } from '../../../atoms';
import { InputLabel, Modal } from '../../../molecules';
import { ModalTopupProps } from '../../../pages/interface';
import useForm from '../CardWallet/useForm';
import validateInfo from '../CardWallet/validate';
import style from './index.module.scss';

const ModalTopup: React.FC<ModalTopupProps> = ({
  show,
  handleCloseModal,
}): JSX.Element => {
  const { values, handleChange, handleSubmit, errors } = useForm(validateInfo);
  return (
    <Modal show={show}>
      <div className={style.modal__header}>
        <h6>Topup</h6>
        <Button
          onClick={handleCloseModal}
          border="pill"
          className={style.modal__header__button}
        >
          X
        </Button>
      </div>
      <p>Enter the amount you want to topup</p>
      <form onSubmit={handleSubmit}>
        <InputLabel
          label="Amount"
          name="amount"
          type="number"
          value={values.amount}
          placeholder="Enter the amount"
          onChange={handleChange}
          message={errors?.amount}
        />
        <Button type="submit" variant="primary__outline">
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default ModalTopup;
