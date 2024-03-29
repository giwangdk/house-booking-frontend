import React from 'react';
import { useParams } from 'react-router-dom';
import { CardHouseDetail, CardHouseProfile, Container } from '../../components';
import { IHouse } from '../../helpers/types';
import style from './index.module.scss';
import { useQuery } from 'react-query';
import { getHouseById } from '../../services/service';
import { IHouseDetailResponse } from '../../helpers/types/response.interface';
import Skeleton from 'react-loading-skeleton';

const HouseDetail = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery<IHouseDetailResponse>(
    'get-house-by-id',
    () => getHouseById(id as string).then((res) => res.data),
  );

  return (
    <Container className={style.house__detail}>
      {isLoading ? (
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <>
          <CardHouseProfile house={data?.data as IHouse} />
          <CardHouseDetail house={data?.data as IHouse} />
        </>
      )}
    </Container>
  );
};

export default HouseDetail;
