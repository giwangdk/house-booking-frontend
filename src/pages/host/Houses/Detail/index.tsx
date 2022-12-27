import React from 'react';
import { Table, TableHouses } from '../../../../components';
import style from './index.module.scss';

const DetailHouse = (): JSX.Element => {
  return (
    <div className={style.detail_page}>
      <div className={style.detail_page__header}>
        <h3 className={style.detail_page__header__title}>My Houses</h3>
        <button className={style.detail_page__header__button}>Add House</button>
      </div>
      <div className={style.detail_page__content}>
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
          <></>
        </Table>
      </div>
    </div>
  );
};

export default DetailHouse;
