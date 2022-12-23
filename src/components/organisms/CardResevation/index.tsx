import moment from 'moment';
import React, { useContext, useState } from 'react';
import { DateContext } from '../../../context/date-context';
import { Button } from '../../atoms';
import { Card, InputDate } from '../../molecules';
import { DetailHouseProps } from '../../molecules/interface';
import style from './index.module.scss';

const CardReservation: React.FC<DetailHouseProps> = ({ house }) => {
  const { checkin_date, checkout_date, setCheckinDate, setCheckoutDate } =
    useContext(DateContext);

  const handleChangeStartDate = (date: Date) => {
    setCheckinDate(date);
  };
  const handleChangeEndDate = (date: Date) => {
    setCheckoutDate(date);
  };

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
          selectsEnd
          startDate={checkin_date}
          endDate={checkout_date}
          minDate={checkin_date}
        />
      </div>
      <div className={style.card__reservation__total}>
        <p>Rp. {house?.price}</p>
        <p>Rp.{(house?.price as number) * 3}</p>
      </div>
      <hr />
      <div className={style.card__reservation__total}>
        <p>Total</p>
        <p>Rp.{(house?.price as number) * 3}</p>
      </div>
      <Button variant="secondary">Book Now</Button>
    </Card>
  );
};

export default CardReservation;
