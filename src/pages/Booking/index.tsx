import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import {
  CardDetailBooking,
  CardFormBooking,
  Container,
} from '../../components';
import { IHouse, IHouseDetailResponse } from '../../helpers/types';
import { getHouseById } from '../../services/service';
import style from './index.module.scss';

const Booking = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  const [currentPrice, setCurrentPrice] = useState(null);

  const { data } = useQuery<IHouseDetailResponse>('get-house-by-id', () =>
    getHouseById(id as string).then((res) => res.data),
  );
  useEffect(() => {
    sessionStorage.setItem('price', JSON.stringify(data?.data?.price));
    const price = sessionStorage.getItem('price');
    setCurrentPrice(JSON.parse(price as string));
  }, []);

  useEffect(() => {
    const price = sessionStorage.getItem('price');
    if (
      JSON.parse(price as string) !== null &&
      data?.data?.price !== null &&
      JSON.parse(price as string) !== data?.data?.price
    ) {
      alert('Price has been changed');
    }
  }, [data?.data?.price]);

  return (
    <div className={style.booking}>
      <Container className={style.booking__container}>
        <CardFormBooking currentPrice={currentPrice} />
        <CardDetailBooking
          house={data?.data as IHouse}
          currentPrice={currentPrice}
        />
      </Container>
    </div>
  );
};

export default Booking;
