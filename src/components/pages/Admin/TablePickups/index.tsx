import moment from 'moment';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { queryClient } from '../../../../helpers/queryClient';
import { submitDeleteHouse } from '../../../../services/service';
import { Button } from '../../../atoms';
import { TablePickupsProps } from '../../interface';
import style from './index.module.scss';

const TablePickups: React.FC<TablePickupsProps> = (props) => {
  const { isLoading, pickups } = props;

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
      {pickups ? (
        pickups?.map((datum, index) => {
          return (
            <tr key={datum?.id}>
              <td>{index + 1}</td>
              <td>{datum?.reservation_id}</td>
              <td>{datum?.user_id}</td>
              <td>{datum?.pickup_status?.status}</td>
              <td>
                <Button>Edit Status</Button>
              </td>
            </tr>
          );
        })
      ) : (
        <tr>data empty...</tr>
      )}
    </tbody>
  );
};

export default TablePickups;
