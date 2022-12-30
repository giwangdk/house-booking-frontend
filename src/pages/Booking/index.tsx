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

  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [isReqPickup, setIsReqPickup] = useState<boolean>(false);
  const [pickupPrice, setPickupPrice] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(
    (currentPrice as number) + pickupPrice,
  );

  const { data } = useQuery<IHouseDetailResponse>('get-house-by-id', () =>
    getHouseById(id as string).then((res) => res.data),
  );

  const handlePickupPrice = (value: number, isPickup: boolean) => {
    setIsReqPickup(isPickup);
    setPickupPrice(value);

    if (currentPrice !== undefined) {
      setTotalPrice(currentPrice + value);
    }

    setTotalPrice(0 + value);
  };

  useEffect(() => {
    sessionStorage.setItem('price', JSON.stringify(data?.data?.price));
    const price = sessionStorage.getItem('price');
    if (price !== undefined) {
      setCurrentPrice(JSON.parse(price as string));
      setTotalPrice(JSON.parse(price as string));
    }
    setCurrentPrice(data?.data?.price as number);
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
        <CardFormBooking
          currentPrice={currentPrice as number}
          totalPrice={totalPrice}
          isReqPickup={isReqPickup}
          handlePickupPrice={handlePickupPrice}
          pickupPrice={pickupPrice}
        />
        <CardDetailBooking
          house={data?.data as IHouse}
          pickupPrice={pickupPrice}
          currentPrice={currentPrice}
          totalPrice={totalPrice}
          isReqPickup={isReqPickup}
        />
      </Container>
    </div>
  );
};

export default Booking;
