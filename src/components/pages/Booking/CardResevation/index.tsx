import moment from 'moment';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DateContext } from '../../../../context/date-context';
import { Button, Error } from '../../../atoms';
import { Card, InputDate } from '../../../molecules';
import { DetailHouseProps } from '../../../molecules/interface';
import style from './index.module.scss';

const CardReservation: React.FC<DetailHouseProps> = ({ house }) => {
  const { checkin_date, checkout_date, setCheckinDate, setCheckoutDate } =
    useContext(DateContext);

  const navigate = useNavigate();
  const handleChangeStartDate = (date: Date) => {
    setCheckinDate(date);
  };
  const handleChangeEndDate = (date: Date) => {
    setCheckoutDate(date);
  };

  const handleNavigate = () => {
    if (checkout_date < checkin_date) {
      return toast.error('Checkout date must be greater than checkin date');
    }
    navigate(`/house-book/${house?.id}`);
  };

  const day = moment(checkout_date).diff(moment(checkin_date), 'days');

  return (
    <Card className={style.card__reservation}>
      <h6>Rp. {house?.price}/ night</h6>
      <div className={style.card__reservation__date}>
        <InputDate
          label="Checkin Date"
          selected={checkin_date}
          onChange={handleChangeStartDate}
          selectsStart
          minDate={moment(Date.now()).toDate()}
          startDate={checkin_date}
          endDate={checkout_date}
        />
        <InputDate
          label="Checkout Date"
          selected={checkout_date}
          onChange={handleChangeEndDate}
          minDate={checkin_date}
          selectsEnd
          startDate={checkin_date}
          endDate={checkout_date}
          excludeDates={[checkin_date]}
        />
        {checkout_date <= checkin_date && (
          <Error message="Checkout date must be greater than checkin date" />
        )}
      </div>
      <div className={style.card__reservation__total}>
        <p>
          Rp. {house?.price} x {day} night
        </p>
        <p>Rp.{(house?.price as number) * day}</p>
      </div>
      <hr />
      <div className={style.card__reservation__total}>
        <p>Total</p>
        <p>Rp.{(house?.price as number) * day}</p>
      </div>
      <Button
        variant="secondary"
        className={style.card__reservation__button}
        onClick={handleNavigate}
        disabled={checkout_date <= checkin_date}
      >
        Book Now
      </Button>
    </Card>
  );
};

export default CardReservation;
