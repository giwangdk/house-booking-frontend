import React from 'react';
import style from './index.module.scss';
import Skeleton from 'react-loading-skeleton';
import { TableProps } from '../../organisms/interface';

const Table: React.FC<TableProps> = (props) => {
  const { headers, isLoading } = props;

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
        <tbody className={style.table__body}>
          {isLoading && (
            <tr>
              <td>
                {' '}
                <Skeleton
                  style={{
                    margin: '1rem auto',
                    width: '100%',
                    textAlign: 'center',
                  }}
                  count={5}
                />
              </td>

              <td>
                {' '}
                <Skeleton
                  style={{
                    margin: '1rem auto',
                    width: '100%',
                    textAlign: 'center',
                  }}
                  count={5}
                />
              </td>

              <td>
                {' '}
                <Skeleton
                  style={{
                    margin: '1rem auto',
                    width: '100%',
                    textAlign: 'center',
                  }}
                  count={5}
                />
              </td>

              <td>
                {' '}
                <Skeleton
                  style={{
                    margin: '1rem auto',
                    width: '100%',
                    textAlign: 'center',
                  }}
                  count={5}
                />
              </td>

              <td>
                {' '}
                <Skeleton
                  style={{
                    margin: '1rem auto',
                    width: '100%',
                    textAlign: 'center',
                  }}
                  count={5}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
