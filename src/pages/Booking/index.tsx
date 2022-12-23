import React from 'react';
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

  const { data } = useQuery<IHouseDetailResponse>('get-house-by-id', () =>
    getHouseById(id as string).then((res) => res.data),
  );
  return (
    <div className={style.booking}>
      <Container className={style.booking__container}>
        <CardFormBooking />
        <CardDetailBooking house={data?.data as IHouse} />
      </Container>
    </div>
  );
};

export default Booking;
