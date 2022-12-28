import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { Button, Table } from '../../../../components';
import {
  HouseHostDetail,
  HouseHostProfile,
  TableHousePhotos,
} from '../../../../components/organisms/Host';
import useForm from '../../../../components/organisms/Host/HouseHostDetail/useForm';

import {
  IHouse,
  IHouseDetailResponse,
  IHousePhoto,
} from '../../../../helpers/types';
import { getHouseById } from '../../../../services/service';
import style from './index.module.scss';

const HostDetailHouse = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery<IHouseDetailResponse>(
    'get-house-by-id',
    () =>
      getHouseById(id as string).then((res) => {
        return res.data;
      }),
  );
  return (
    <div className={style.detail_page}>
      <div className={style.detail__page__header}>
        <Link className={style.detail__page__header__button} to="/host/houses">
          <FaArrowCircleLeft />
        </Link>
        <h3 className={style.detail__page__header__title}>
          {data?.data?.name}
        </h3>
      </div>
      <div className={style.detail__page__content}>
        <HouseHostProfile house={data?.data as IHouse} />
        <HouseHostDetail house={data?.data as IHouse} />
      </div>
      <div className={style.detail__page__table}>
        <h5>House Photos</h5>
        <Button>Add Photo</Button>
      </div>
      <Table headers={['ID', 'Photo', 'Action']}>
        <TableHousePhotos
          photos={data?.data?.photos as IHousePhoto[]}
          isLoading={isLoading}
        />
      </Table>
    </div>
  );
};

export default HostDetailHouse;
