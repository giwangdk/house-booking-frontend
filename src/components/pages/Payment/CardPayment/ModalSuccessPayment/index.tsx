import React from 'react';
import { Button } from '../../../../atoms';
import { Modal } from '../../../../molecules';
import style from './index.module.scss';
import QRCode from 'react-qr-code';
import useMediaQuery from '../../../../../hooks/useMediaQuery';
import { ModalPaymentProps } from '../../../interface';

const ModalSuccessPayment: React.FC<ModalPaymentProps> = ({
  show,
  handleCloseModal,
  reservation,
}): JSX.Element => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <Modal show={show}>
      <div className={style.modal__header}>
        <h6>Your Payment is success!</h6>
        <Button
          onClick={handleCloseModal}
          border="pill"
          className={style.modal__header__button}
        >
          X
        </Button>
      </div>
      <div className={style.modal_qr}>
        <div className={style.modal__qr__header}>
          <h6>Booking Code</h6>
          <p>{reservation?.booking_code}</p>
        </div>
        {isMobile ? (
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={JSON.stringify(reservation)}
            viewBox={`0 0 80 80`}
          />
        ) : (
          <QRCode
            size={156}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={JSON.stringify(reservation)}
            viewBox={`0 0 156 156`}
          />
        )}
      </div>
    </Modal>
  );
};

export default ModalSuccessPayment;
