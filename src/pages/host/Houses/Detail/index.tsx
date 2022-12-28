import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Table } from '../../../../components';
import {
  HouseHostDetail,
  HouseHostProfile,
  TableHousePhotos,
} from '../../../../components/organisms/Host';

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
    () => getHouseById(id as string).then((res) => res.data),
  );
  return (
    <div className={style.detail_page}>
      <div className={style.detail__page__header}>
        <h3 className={style.detail__page__header__title}>
          {data?.data?.name}
        </h3>
      </div>
      <div className={style.detail__page__content}>
        <HouseHostProfile house={data?.data as IHouse} />
        <HouseHostDetail house={data?.data as IHouse} />
      </div>
      <h5 className={style.detail__page__table}>House Photos</h5>
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
