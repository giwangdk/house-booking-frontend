import React from 'react';
import { TableProps } from '../interface';
import style from './index.module.scss';
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';

const Table: React.FC<TableProps> = (props) => {
  const { headers, transactions, isLoading } = props;

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
          {transactions ? (
            transactions?.data?.map((datum) => {
              return (
                <tr key={datum?.id}>
                  <td>
                    {moment(datum?.created_at).format('h:mm:ss, MMMM Do YYYY')}
                  </td>
                  <td>
                    {' '}
                    {datum?.to_wallet_id === datum.to_user?.wallet_id
                      ? 'DEBIT'
                      : 'CREDIT'}
                  </td>
                  <td>
                    {datum?.to_wallet_id
                      ? datum?.to_wallet_id
                      : datum?.wallet_id}
                  </td>
                  <td>{datum?.description}</td>
                  <td
                    className={
                      datum?.to_wallet_id === datum.to_user?.wallet_id
                        ? style.debit
                        : style.credit
                    }
                  >
                    {datum?.to_wallet_id === datum.to_user?.wallet_id
                      ? '-' + datum?.amount
                      : '+' + datum?.amount}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>data empty...</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
