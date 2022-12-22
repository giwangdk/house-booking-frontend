import React from 'react';
import style from './index.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchProps } from '../interface';

const Search: React.FC<SearchProps> = ({
  handleSearch,
  value,
}): JSX.Element => {
  return (
    <React.StrictMode>
      <div className={style.search}>
        <p>Where</p>
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={value}
        />
      </div>
    </React.StrictMode>
  );
};

export default Search;
