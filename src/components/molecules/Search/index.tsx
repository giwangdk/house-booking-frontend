import React from 'react';
import style from './index.module.scss';
import { SearchProps } from '../interface';

const Search: React.FC<SearchProps> = ({
  handleSearch,
  value,
}): JSX.Element => {
  return (
    <div className={style.search}>
      <p>Where</p>
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        value={value}
      />
    </div>
  );
};

export default Search;
