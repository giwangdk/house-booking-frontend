import React from 'react';
import { IReservation } from '../../../helpers/types';
import { CardReservationUser } from '../../molecules';
import { ListReservations } from '../interface';
import style from './index.module.scss';

const ListCardReservation: React.FC<ListReservations> = ({
  data,
}): JSX.Element => {
  console.log('hereee', data);
  return (
    <div className={style.list__card__house}>
      {data ? (
        data?.map((item) => (
          <CardReservationUser
            reservation={item as IReservation}
            key={item.id}
          />
        ))
      ) : (
        <h1>no data</h1>
      )}
    </div>
  );
};

export default ListCardReservation;
