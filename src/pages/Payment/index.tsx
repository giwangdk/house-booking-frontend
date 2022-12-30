import moment from 'moment';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import {
  CardPayment,
  CardPaymentDetail,
  Container,
  Header,
} from '../../components';
import useAuth from '../../hooks/useAuth';
import { getReservationByBookingCode } from '../../services/service';
import style from './index.module.scss';

const Payment = (): JSX.Element => {
  const { bookingCode } = useParams();
  const [reservation, setReservation] = useState({});

  const { isLoggedIn } = useAuth();

  const getReservation = getReservationByBookingCode(`${bookingCode}`);

  const { data } = useQuery('get-reservation', () =>
    getReservation().then((res: { data: any }) => {
      setReservation(res.data?.data);
      return res.data;
    }),
  );

  const timeout = moment(data?.expired).diff(moment(), 'minutes');

  return (
    <div className={style.payment}>
      <Header className={style.payment__header}>
        <p>Selesaikan Pemesanan dalam : {timeout} </p>
      </Header>
      <Container>
        <h4>Payment</h4>
        <div className={style.payment__wrapper}>
          <div className={style.payment__wrapper__left}>
            <CardPayment reservation={reservation} />
          </div>
          <div className={style.payment__wrapper__right}>
            <CardPaymentDetail reservation={reservation} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Payment;
