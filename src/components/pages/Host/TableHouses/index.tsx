import moment from 'moment';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { queryClient } from '../../../../helpers/queryClient';
import { submitDeleteHouse } from '../../../../services/service';
import { Button } from '../../../atoms';
import { TableHousesProps } from '../../interface';
import style from './index.module.scss';

const TableHouses: React.FC<TableHousesProps> = (props) => {
  const { isLoading, houses } = props;

  const deleteHouse = async (id: number) => {
    console.log('hit me!');

    submitDeleteHouse(id);
  };

  const { mutateAsync, isLoading: loadingDelete } = useMutation(deleteHouse);

  const handleDeleteHouse = (id: number) => {
    mutateAsync(id, {
      onSuccess: () => {
        queryClient.invalidateQueries('getHousesHost');
        toast.success('Delete house success');
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
      {houses ? (
        houses?.map((datum, index) => {
          return (
            <tr key={datum?.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/host/house/${datum?.id}`}>{datum?.name}</Link>
              </td>
              <td>Rp. {datum?.price}</td>
              <td>{datum?.description}</td>
              <td>{datum?.location}</td>
              <td>{datum?.city.name}</td>
              <td>
                <Button
                  onClick={() => {
                    handleDeleteHouse(datum.id as number);
                  }}
                  loading={loadingDelete}
                >
                  Delete
                </Button>
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

export default TableHouses;
