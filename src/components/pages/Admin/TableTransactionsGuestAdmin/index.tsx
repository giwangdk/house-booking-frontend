import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { queryClient } from '../../../../helpers/queryClient';
import { submitTransaction } from '../../../../services/service';
import { Button } from '../../../atoms';
import { TableTransactionsProps } from '../../interface';
import style from './index.module.scss';

const TableTransactionsGuestAdmin: React.FC<TableTransactionsProps> = (
  props,
) => {
  const { isLoading, transactions } = props;

  const confirmPayment = useMutation((data: any) => submitTransaction(data));

  const submitConfirmPayment = (data: any) => {
    confirmPayment.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries('get-transactions-guest');
        toast.success("You've successfully confirmed the payment");
      },
    });
  };

  return (
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
        transactions?.map((datum, index) => {
          return (
            <tr key={datum?.id}>
              <td>{index + 1}</td>
              <td>{datum?.reservation?.booking_code}</td>
              <td>{datum?.user_id}</td>
              <td>
                {datum?.reservation?.status_id === 4
                  ? 'Waiting for confirmation'
                  : ''}
              </td>
              <td>
                <img src={datum?.transfer_slip} alt="" />
              </td>
              <td>
                <Button
                  onClick={() =>
                    submitConfirmPayment({
                      booking_code: datum?.reservation?.booking_code,
                      is_guest: true,
                    })
                  }
                >
                  Confirm Payment
                </Button>
              </td>
              {/* <ModalEditStatus
                show={show}
                handleCloseModal={handleClose}
                pickup={datum}
              /> */}
            </tr>
          );
        })
      ) : (
        <tr>data empty...</tr>
      )}
    </tbody>
  );
};

export default TableTransactionsGuestAdmin;
