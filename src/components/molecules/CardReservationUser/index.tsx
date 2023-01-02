import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from '../../atoms';
import ModalSuccessPayment from '../../pages/Payment/CardPayment/ModalSuccessPayment';
import Card from '../Card';
import { CardReservationProps } from '../interface';
import style from './index.module.scss';

const CardReservationUser: React.FC<CardReservationProps> = ({
  reservation,
}): JSX.Element => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShow(false);
    navigate(`/reservations`);
  };

  const handleNavigateCard = () => {
    if (reservation?.status_id == 1) {
      navigate(`/payment/${reservation.booking_code}`);
    } else {
      console.log('haha');
      setShow(true);
    }
  };

  return (
    <Card className={style.card__reservation} onClick={handleNavigateCard}>
      <h6>Booking Code : {reservation.booking_code}</h6>
      <div className={style.card__reservation__info}>
        <h5>{reservation?.house?.name}</h5>
        <ul>
          <li>Checkin : {reservation?.check_in}</li>
          <li>Checkout : {reservation?.check_out}</li>
        </ul>
        <div className={style.card__reservation__info__price}>
          <p>Rp. {reservation?.total_price}</p>
          {reservation?.status_id == 2 ? (
            <Badge variant="success" size="small" border="pill">
              Settlement
            </Badge>
          ) : reservation?.status_id == 1 ? (
            <Badge variant="primary" size="small" border="pill">
              Pending
            </Badge>
          ) : (
            ''
          )}
        </div>
      </div>
      <ModalSuccessPayment
        show={show}
        handleCloseModal={handleCloseModal}
        reservation={reservation}
      />
    </Card>
  );
};

export default CardReservationUser;
