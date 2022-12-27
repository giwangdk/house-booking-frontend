import React from 'react';
import style from './index.module.scss';
import Skeleton from 'react-loading-skeleton';
import { TableProps } from '../../organisms/interface';

const Table: React.FC<TableProps> = (props) => {
  const { headers, isLoading, children } = props;

  return (
    <div className={style.table__container}>
      <table className={style.table}>
        <thead className={style.table__head}>
          <tr>
            {headers.map((header) => {
              return (
                <th scope="col" key={header}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        {children}
      </table>
    </div>
  );
};

export default Table;
