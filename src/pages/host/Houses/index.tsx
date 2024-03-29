import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {
  Button,
  ModalAddHouse,
  Pagination,
  Search,
  SortAndFilter,
  Table,
  TableHouses,
} from '../../../components';
import { IHouse, IHouseResponse } from '../../../helpers/types';
import useDebounce from '../../../hooks/useDebounce';
import {  getHousesHost } from '../../../services/service';
import style from './index.module.scss';

const Houses = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [value, setValue] = useState({
    searchBy: '',
    page: 1,
  });
  const [sortBy, setSortBy] = useState<string>('name');
  const [sort, setSort] = useState<string>('asc');
  const val = useDebounce(value.searchBy, 500);
  const sortByVal = useDebounce(sortBy, 500);
  const sortVal = useDebounce(sort, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, searchBy: e.target.value });
  };
  const handlePagination = (page: number) => {
    setPage(page);
  };
  const handleSortVal = (e: any) => {
    setSort(e.value);
  };
  const handleSortByVal = (e: any) => {
    setSortBy(e.value);
  };
  const { data, isLoading } = useQuery<IHouseResponse>(
    ['getHousesHost', val, page, sortByVal, sortVal],
    () =>
      getHousesHost(
        `searchBy=${val}&sort=${sortVal}&sortBy=${sortByVal}&page=${page}`,
      ).then((res) => res.data),
    {
      enabled: Boolean([val, sortVal, sortByVal, page]),
    },
  );
  const [show, setShow] = useState(false);

  const handleCloseModal = () => {
    setShow(false);
  };

  const handleShowModal = () => {
    setShow(true);
  };
  const nPages = Math.ceil(
    (data?.data.total as number) / (data?.data?.limit as number),
  );

  return (
    <div className={style.houses__page}>
      <div className={style.houses__page__header}>
        <h3 className={style.houses__page__header__title}>My Houses</h3>
        <Button onClick={handleShowModal}>Add House</Button>
      </div>
      <div className={style.houses__page__content}>
        <div className={style.houses__page__content__header}>
          <SortAndFilter
            valueSort={sort}
            valueSortBy={sortBy}
            handleSort={handleSortVal}
            handleSortBy={handleSortByVal}
          />
          <Search handleSearch={handleSearch} value={value.searchBy} />
        </div>
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
      <Pagination
        nPages={nPages}
        currentPage={page as number}
        setCurrentPage={handlePagination}
      />
      <ModalAddHouse show={show} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default Houses;
