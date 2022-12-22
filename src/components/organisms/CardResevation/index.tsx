import React, { useState } from 'react';
import { Button } from '../../atoms';
import { Card, InputDate } from '../../molecules';
import { DetailHouseProps } from '../../molecules/interface';
import style from './index.module.scss';

const CardReservation: React.FC<DetailHouseProps> = ({ house }) => {
  const [startDate, setStartDate] = useState(new Date('2014/02/08'));
  const [endDate, setEndDate] = useState(new Date('2014/02/10'));

  const handleChangeStartDate = (date: Date) => {
    setStartDate(date);
  };
  const handleChangeEndDate = (date: Date) => {
    setEndDate(date);
  };
  return (
    <Card className={style.card__reservation}>
      <h6>Rp. {house?.price}/ night</h6>
      <div className={style.card__reservation__date}>
        <InputDate
          label="Checkin Date"
          selected={startDate}
          onChange={handleChangeStartDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <InputDate
          label="Checkout Date"
          selected={endDate}
          onChange={handleChangeEndDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
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
      <Button variant="secondary">Reserve</Button>
    </Card>
  );
};

export default CardReservation;
