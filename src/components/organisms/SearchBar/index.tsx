import React from 'react';
import { SearchAndDateBar } from '../../molecules';
import { SearchBarProps } from '../../molecules/interface';
import style from './index.module.scss';

const SearchBar: React.FC<SearchBarProps> = ({
  handleSearch,
  value,
}): JSX.Element => {
  return (
    <div className={style.search__navbar}>
      <SearchAndDateBar handleSearch={handleSearch} value={value} />
    </div>
  );
};

export default SearchBar;
