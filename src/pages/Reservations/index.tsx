import React, { useContext, useState } from 'react';
import { Container, ListCardReservation } from '../../components';
import style from './index.module.scss';
import { useQuery } from 'react-query';
import { IReservationResponse } from '../../helpers/types/response.interface';
import { getReservations } from '../../services/service';
import { IReservation } from '../../helpers/types';

const Reservations = (): JSX.Element => {
  const [reservations, setReservations] = useState<IReservation[]>();
  const { data, isLoading } = useQuery<IReservationResponse>(
    ['get-reservations'],
    () =>
      getReservations().then((res) => {
        setReservations(res.data.data.reservations);
        return res.data;
      }),
  );

  return (
    <div className={style.home}>
      <Container>
        {isLoading && <div>Loading...</div>}
        {<ListCardReservation data={reservations as IReservation[]} />}
      </Container>
    </div>
  );
};

export default Reservations;
