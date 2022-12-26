import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { CardHowToPay, CardPayment, Container, Header } from '../../components';
import useAuth from '../../hooks/useAuth';
import { getReservationByBookingCode } from '../../services/service';
import style from './index.module.scss';

const Payment = (): JSX.Element => {
  const { bookingCode } = useParams();

  const { isLoggedIn } = useAuth();

  const getReservation = getReservationByBookingCode(`${bookingCode}`);

  const { data } = useQuery('get-reservation', () =>
    getReservation().then((res: { data: any }) => res.data.data),
  );

  console.log(data);

  return (
    <div className={style.payment}>
      <Header className={style.payment__header}>
        <p>Selesaikan Pemesanan dalam : </p>
      </Header>
      <Container className={style.payment__wrapper}>
        <CardPayment />
        {!isLoggedIn && <CardHowToPay />}
      </Container>
    </div>
  );
};

export default Payment;
