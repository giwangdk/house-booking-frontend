import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Table, TableTransactionsGuestAdmin } from '../../../components';
import { ITransaction, ITransactionResponse } from '../../../helpers/types';
import { getTransactionsGuest } from '../../../services/service';
import style from './index.module.scss';

const TransactionGuest = (): JSX.Element => {
  const [transactions, setTransactions] = useState<ITransaction[]>();

  const { isLoading } = useQuery<ITransactionResponse>(
    ['get-transactions-guest'],
    () =>
      getTransactionsGuest().then((res) => {
        setTransactions(res.data.data.transactions);
        return res.data;
      }),
  );

  return (
    <div className={style.pickups__page}>
      <div className={style.pickups__page__header}>
        <h3 className={style.pickups__page__header__title}>List Pickups</h3>
      </div>

      <div className={style.pickups__page__content}>
        <Table
          headers={[
            'ID',
            'Booking Code',
            'User ID',
            'Status',
            'Transfer Slip',
            'Action',
          ]}
        >
          <TableTransactionsGuestAdmin
            transactions={transactions as ITransaction[]}
            isLoading={isLoading}
          />
        </Table>
      </div>
    </div>
  );
};

export default TransactionGuest;
