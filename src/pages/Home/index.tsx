import React, { useContext, useState } from 'react';
import { Container, ListCardHouse, SearchBar } from '../../components';
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
  const [value, setValue] = useState({
    searchBy: '',
    page: 1,
  });
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
  const { data, isLoading } = useQuery<IHouseResponse>(
    ['getHouses', val, checkinDate, checkoutDate],
    () =>
      getHouses(
        `searchBy=${val}&checkin_date=${checkinDate}&checkout_date=${checkoutDate}`,
      ).then((res) => res.data),
    {
      enabled: Boolean([val, checkinDate, checkoutDate]),
    },
  );

  console.log(data);

  return (
    <div className={style.home}>
      <SearchBar handleSearch={handleSearch} value={value.searchBy} />
      <Container>
        {isLoading && <div>Loading...</div>}
        {<ListCardHouse data={data?.data?.houses as IHouse[]} />}
      </Container>
    </div>
  );
};

export default Home;
