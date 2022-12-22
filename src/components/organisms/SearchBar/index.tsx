import React from 'react';
import { SearchAndDateBar } from '../../molecules';
import style from './index.module.scss';

const SearchBar = (): JSX.Element => {
  return (
    <React.StrictMode>
      <div className={style.search__navbar}>
        <SearchAndDateBar />
      </div>
    </React.StrictMode>
  );
};

export default SearchBar;
