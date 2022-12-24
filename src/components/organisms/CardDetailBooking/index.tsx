import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { DateContext } from '../../../context/date-context';
import { Button } from '../../atoms';
import { Card, InputDate } from '../../molecules';
import { DetailHouseProps } from '../../molecules/interface';
import style from './index.module.scss';
import { GiFamilyHouse } from 'react-icons/gi';
import CardHotel from './CardHotel';

const CardDetailBooking: React.FC<DetailHouseProps> = ({ house }) => {
  const { checkin_date, checkout_date, setCheckinDate, setCheckoutDate } =
    useContext(DateContext);

  const [currentPrice, setCurrentPrice] = useState(null);

  useEffect(() => {
    sessionStorage.setItem('price', JSON.stringify(house?.price));
    const price = sessionStorage.getItem('price');
    setCurrentPrice(JSON.parse(price as string));
  }, []);

  return (
    <Card className={style.card__detail_booking}>
      <div className={style.card__detail__booking__header}>
        <GiFamilyHouse />
        <h6>{house?.name}</h6>
      </div>
      <div className={style.card__detail__booking__date}>
        <div className={style.date}>
          <p>Checkin Date</p>
          <p>{moment(checkin_date).format('DD MMMM YYYY')}</p>
        </div>
        <div className={style.date}>
          <p>Checkout Date</p>
          <p>{moment(checkout_date).format('DD MMMM YYYY')}</p>
        </div>
      </div>
      <CardHotel house={house} currentPrice={currentPrice} />
    </Card>
  );
};

export default CardDetailBooking;
