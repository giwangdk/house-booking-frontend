import React, { useState } from 'react';
import { Card, InputDate } from '../../molecules';
import { DetailHouseProps } from '../../molecules/interface';
import style from './index.module.scss';

const CardReservation: React.FC<DetailHouseProps> = ({ house }) => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));

  const handleChangeStartDate = (date: Date) => {
    setStartDate(date);
  }
  const handleChangeEndDate = (date: Date) => {
    setEndDate(date);
  }
  return (
    <Card className={style.card__reservation}>
      <h6>Rp. {house.price}/ night</h6>
      <div className={style.card__resevation__date}>
      <InputDate 
        selected={startDate}
        onChange={handleChangeStartDate}
        selectsStart
        startDate={startDate}
        endDate={endDate} />
      <InputDate 
      selected={endDate}
      onChange={handleChangeEndDate}
      selectsEnd
      startDate={startDate}
      endDate={endDate}
      minDate={startDate}/>
      </div>
    </Card>
  );
};

export default CardReservation;
