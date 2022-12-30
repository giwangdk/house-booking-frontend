import moment from 'moment';
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { Pagination, Table, TableHouses } from '../../../components';
import { DateContext } from '../../../context/date-context';
import { IHouse, IHouseResponse } from '../../../helpers/types';
import useDebounce from '../../../hooks/useDebounce';
import { getHouses } from '../../../services/service';
import style from './index.module.scss';

const Houses = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [value, setValue] = useState({
    searchBy: '',
    page: 1,
  });
  const [houses, setHouses] = useState<IHouse[]>([]);
  const val = useDebounce(value.searchBy, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, searchBy: e.target.value });
  };
  const handlePagination = (page: number) => {
    setPage(page);
  };
  const { data, isLoading } = useQuery<IHouseResponse>(
    ['getHouses', val, page],
    () =>
      getHouses(`searchBy=${val}&page=${page}`).then((res) => {
        setHouses(res.data.houses);
        return res.data;
      }),
    {
      enabled: Boolean([val, page]),
    },
  );

  const nPages = Math.ceil(
    (data?.data.total as number) / (data?.data?.limit as number),
  );

  console.log(data);

  return (
    <div className={style.houses__page}>
      <div className={style.houses__page__header}>
        <h3 className={style.houses__page__header__title}>List Houses</h3>
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
        <Pagination
          nPages={nPages}
          currentPage={page as number}
          setCurrentPage={handlePagination}
        />
      </div>
    </div>
  );
};

export default Houses;
