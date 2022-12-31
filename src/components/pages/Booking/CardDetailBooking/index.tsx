import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { DateContext } from '../../../../context/date-context';
import { Button } from '../../../atoms';
import { Card, InputDate } from '../../../molecules';
import style from './index.module.scss';
import { GiFamilyHouse } from 'react-icons/gi';
import CardHotel from './CardHotel';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

const CardDetailBooking: React.FC = () => {
  const { house, isReqPickup, pickupPrice, currentPrice, totalPrice } =
    useSelector((state: RootState) => state.house);
  const { checkin_date, checkout_date } = useContext(DateContext);
  const day = moment(checkout_date).diff(checkin_date, 'days');
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
        <div className={style.date}>
          <p>Price</p>
          <p>Rp. {currentPrice}/night</p>
        </div>
      </div>
      <CardHotel />
      <div className={style.card__detail__booking__price}>
        <p>
          Rp. {currentPrice} x<span> {day} Night</span>
        </p>
        <p>
          Rp.
          {currentPrice * day}
        </p>
      </div>

      {isReqPickup && (
        <div className={style.card__detail__booking__price}>
          <p>Pickup price </p>
          <p>
            Rp.
            {pickupPrice}
          </p>
        </div>
      )}

      <div className={style.card__detail__booking__price}>
        <p>Total Price</p>
        <p>Rp. {totalPrice}</p>
      </div>
    </Card>
  );
};

export default CardDetailBooking;
