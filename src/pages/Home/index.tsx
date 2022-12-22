import React from 'react';
import { Container, ListCardHouse, SearchBar } from '../../components';
import style from './index.module.scss';
import { useQuery } from 'react-query';
import { IHouse } from '../../helpers/types';
import { getHouses } from '../../services/service';
import { toast } from 'react-toastify';
import { IHouseResponse } from '../../helpers/types/response.interface';

const Home = (): JSX.Element => {
  const { data, isLoading } = useQuery<IHouseResponse>(
    'getHouses',
    () => getHouses().then((res) => res.data),
  );

  console.log(data);

  return (
    <div className={style.home}>
      <div>Home</div>
      <SearchBar />
      <Container>
        {isLoading && <div>Loading...</div>}
        {<ListCardHouse data={data?.data?.houses as IHouse[]} />}
      </Container>
    </div>
  );
};

export default Home;
