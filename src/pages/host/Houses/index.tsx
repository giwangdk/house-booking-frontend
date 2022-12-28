import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Button, ModalAddHouse, Table, TableHouses } from '../../../components';
import { IHouse, IHouseResponse } from '../../../helpers/types';
import { getHouses, getHousesHost } from '../../../services/service';
import style from './index.module.scss';

const Houses = (): JSX.Element => {
  const { data, isLoading } = useQuery<IHouseResponse>(['getHousesHost'], () =>
    getHousesHost().then((res) => res.data),
  );
  const [show, setShow] = useState(false);

  const handleCloseModal = () => {
    setShow(false);
  };

  const handleShowModal = () => {
    setShow(true);
  };

  return (
    <div className={style.houses__page}>
      <div className={style.houses__page__header}>
        <h3 className={style.houses__page__header__title}>My Houses</h3>
        <Button onClick={handleShowModal}>Add House</Button>
      </div>
      <div className={style.houses__page__content}>
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
      <ModalAddHouse show={show} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default Houses;
