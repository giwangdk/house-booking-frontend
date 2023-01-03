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
import { IReservation } from '../../helpers/types';
import { getReservationByBookingCode } from '../../services/service';
import style from './index.module.scss';

const Payment = (): JSX.Element => {
  const { bookingCode } = useParams();
  const [reservation, setReservation] = useState<IReservation>({});

  const getReservation = getReservationByBookingCode(`${bookingCode}`);

  useQuery('get-reservation', () =>
    getReservation().then((res: { data: any }) => {
      setReservation(res.data?.data);
      return res.data;
    }),
  );

  const timeout = moment(reservation.expired).diff(moment(), 'minutes');

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
