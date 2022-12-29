import React, { useState } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { Button, Table } from '../../../../components';
import {
  HouseHostDetail,
  HouseHostProfile,
  ModalAddPhoto,
  TableHousePhotos,
} from '../../../../components';

import {
  IHouse,
  IHouseDetailResponse,
  IHousePhoto,
} from '../../../../helpers/types';
import { getHouseById } from '../../../../services/service';
import style from './index.module.scss';

const HostDetailHouse = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [house, setHouse] = useState<IHouse>({} as IHouse);

  const { data, isLoading } = useQuery<IHouseDetailResponse>(
    'get-house-by-id',
    () =>
      getHouseById(id as string).then((res) => {
        setHouse(res.data.data);
        return res.data;
      }),
  );
  const [show, setShow] = useState(false);

  const handleCloseModal = () => {
    setShow(false);
  };

  const handleShowModal = () => {
    setShow(true);
  };
  return (
    <div className={style.detail__page}>
      <div className={style.detail__page__header}>
        <Link className={style.detail__page__header__button} to="/host/houses">
          <FaArrowCircleLeft />
        </Link>
        <h3 className={style.detail__page__header__title}>
          {data?.data?.name}
        </h3>
      </div>
      <div className={style.detail__page__content}>
        <HouseHostProfile house={house} />
        <HouseHostDetail house={house} />
      </div>
      <div className={style.detail__page__table}>
        <h5>House Photos</h5>
        <Button onClick={handleShowModal}>Add Photo</Button>
      </div>
      <Table headers={['ID', 'Photo', 'Action']}>
        <TableHousePhotos
          photos={data?.data?.photos as IHousePhoto[]}
          isLoading={isLoading}
        />
      </Table>
      <ModalAddPhoto
        show={show}
        handleCloseModal={handleCloseModal}
        house={house}
      />
    </div>
  );
};

export default HostDetailHouse;
