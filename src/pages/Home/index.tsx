import React from 'react';
import { Container, ListCardHouse, SearchBar } from '../../components';
import style from './index.module.scss';

const Home = (): JSX.Element => {
  return (
    <div className={style.home}>
      <div>Home</div>
      <SearchBar />
      <Container>
        <ListCardHouse />
      </Container>
    </div>
  );
};

export default Home;
