import React from 'react';
import { useQuery } from 'react-query';
import { Table, TableHouses } from '../../../components';
import { IHouse, IHouseResponse } from '../../../helpers/types';
import { getHouses, getHousesHost } from '../../../services/service';
import style from './index.module.scss';

const Houses = (): JSX.Element => {
  const { data, isLoading } = useQuery<IHouseResponse>(['getHousesHost'], () =>
    getHousesHost().then((res) => res.data),
  );

  return (
    <div className={style.houses_page}>
      <div className={style.houses_page__header}>
        <h3 className={style.houses_page__header__title}>My Houses</h3>
        <button className={style.houses_page__header__button}>Add House</button>
      </div>
      <div className={style.houses_page__content}>
        <Table
          headers={[
            'ID',
            'Name',
            'Price',
            'Description',
            'Location',
            'City',
            'Action',
          ]}
        >
          <TableHouses
            houses={data?.data.houses as IHouse[]}
            isLoading={isLoading}
          />
        </Table>
      </div>
    </div>
  );
};

export default Houses;
