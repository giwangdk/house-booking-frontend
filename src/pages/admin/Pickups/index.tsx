import moment from 'moment';
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import {
  ModalEditStatus,
  Pagination,
  Table,
  TablePickups,
} from '../../../components';
import { DateContext } from '../../../context/date-context';
import { IHouse, IPickupResponse, IPickup } from '../../../helpers/types';
import useDebounce from '../../../hooks/useDebounce';
import { getPickups } from '../../../services/service';
import style from './index.module.scss';

const Pickups = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [value, setValue] = useState({
    searchBy: '',
    page: 1,
  });
  const [Pickups, setPickups] = useState<IPickup[]>([]);
  const val = useDebounce(value.searchBy, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, searchBy: e.target.value });
  };
  const handlePagination = (page: number) => {
    setPage(page);
  };
  const { data, isLoading } = useQuery<IPickupResponse>(
    ['get-pickups', val, page],
    () =>
      getPickups(`searchBy=${val}&page=${page}`).then((res) => {
        setPickups(res.data.Pickups);
        return res.data;
      }),
    {
      enabled: Boolean([val, page]),
    },
  );

  const nPages = Math.ceil(
    (data?.data.total as number) / (data?.data?.limit as number),
  );

  return (
    <div className={style.pickups__page}>
      <div className={style.pickups__page__header}>
        <h3 className={style.pickups__page__header__title}>List Pickups</h3>
      </div>
      <div className={style.pickups__page__content}>
        <Table headers={['ID', 'Booking Code', 'User ID', 'Status']}>
          <TablePickups
            pickups={data?.data.pickups as IPickup[]}
            isLoading={isLoading}
          />
        </Table>
        <Pagination
          nPages={nPages}
          currentPage={page as number}
          setCurrentPage={handlePagination}
        />
      </div>
    </div>
  );
};

export default Pickups;
