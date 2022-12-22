import React from 'react';
import { SearchBar } from '../../components';
import style from './index.module.scss';

const Home = (): JSX.Element => {
  return (
    <div className={style.home}>
      <div>Home</div>
      <SearchBar />
    </div>
  );
};

export default Home;
