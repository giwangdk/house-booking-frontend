import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { queryClient } from '../../../../helpers/queryClient';
import { submitDeleteHouse } from '../../../../services/service';
import { Button } from '../../../atoms';
import { TableHousesProps } from '../../interface';
import style from './index.module.scss';

const TableHousesAdmin: React.FC<TableHousesProps> = (props) => {
  const { isLoading, houses } = props;

  const submitDelete = useMutation((id: number) => submitDeleteHouse(id));

  const handleDeleteHouse = (id: number) => {
    submitDelete.mutate(id, {
      onSuccess: (res) => {
        queryClient.invalidateQueries('get-houses');
        toast.success('House has been deleted');
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
              <td>{datum?.name}</td>
              <td>Rp. {datum?.price}</td>
              <td>{datum?.description}</td>
              <td>{datum?.location}</td>
              <td>{datum?.city.name}</td>
              <td>
                <Button
                  onClick={() => {
                    handleDeleteHouse(datum.id as number);
                  }}
                  loading={submitDelete.isLoading}
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

export default TableHousesAdmin;
