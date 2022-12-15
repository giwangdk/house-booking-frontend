import React from 'react';
import style from './index.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchProps } from '../interface ';

const Search: React.FC<SearchProps> = ({
  handleSearch,
  value,
}): JSX.Element => {
  return (
    <div className={style.search}>
      <AiOutlineSearch />
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
