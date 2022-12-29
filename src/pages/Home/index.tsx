import React, { useContext, useState } from 'react';
import {
  Container,
  ListCardHouse,
  Pagination,
  SearchBar,
} from '../../components';
import style from './index.module.scss';
import { useQuery } from 'react-query';
import { IHouse } from '../../helpers/types';
import { getHouses } from '../../services/service';
import { toast } from 'react-toastify';
import { IHouseResponse } from '../../helpers/types/response.interface';
import useDebounce from '../../hooks/useDebounce';
import { DateContext } from '../../context/date-context';
import moment from 'moment';

const Home = (): JSX.Element => {
  const { checkin_date, checkout_date } = useContext(DateContext);
  const [page, setPage] = useState<number>(1);
  const [value, setValue] = useState({
    searchBy: '',
    page: 1,
  });
  const [houses, setHouses] = useState<IHouse[]>([]);
  const val = useDebounce(value.searchBy, 500);
  const checkinDate = useDebounce(
    moment(checkin_date).format('YYYY-MM-DD'),
    1000,
  );
  const checkoutDate = useDebounce(
    moment(checkout_date).format('YYYY-MM-DD'),
    1000,
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, searchBy: e.target.value });
  };
  const handlePagination = (page: number) => {
    setPage(page);
  };
  const { data, isLoading } = useQuery<IHouseResponse>(
    ['getHouses', val, checkinDate, checkoutDate, page],
    () =>
      getHouses(
        `searchBy=${val}&checkin_date=${checkinDate}&checkout_date=${checkoutDate}&page=${page}`,
      ).then((res) => {
        setHouses(res.data.houses);
        return res.data;
      }),
    {
      enabled: Boolean([val, checkinDate, checkoutDate]),
    },
  );

  const nPages = Math.ceil(
    (data?.data.total as number) / (data?.data?.limit as number),
  );

  return (
    <div className={style.home}>
      <SearchBar handleSearch={handleSearch} value={value.searchBy} />
      <Container>
        {isLoading && <div>Loading...</div>}
        {<ListCardHouse data={data?.data?.houses as IHouse[]} />}
        <Pagination
          nPages={nPages}
          currentPage={page as number}
          setCurrentPage={handlePagination}
        />
      </Container>
    </div>
  );
};

export default Home;
