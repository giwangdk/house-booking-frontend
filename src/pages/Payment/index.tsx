import moment from 'moment';
import React from 'react';
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

  const { isLoggedIn } = useAuth();

  const getReservation = getReservationByBookingCode(`${bookingCode}`);

  const { data } = useQuery('get-reservation', () =>
    getReservation().then((res: { data: any }) => res.data.data),
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
            <CardPayment reservation={data} />
          </div>
          <div className={style.payment__wrapper__right}>
            <CardPaymentDetail reservation={data} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Payment;
