import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { queryClient } from '../../../../helpers/queryClient';
import { submitDeleteHousePhoto } from '../../../../services/service';
import { Button } from '../../../atoms';
import { TableHousePhotos } from '../../interface';
import style from './index.module.scss';

const TableHouseHostProfile: React.FC<TableHousePhotos> = (props) => {
  const { isLoading, photos } = props;

  const submitDelete = useMutation(submitDeleteHousePhoto);

  const handleDelete = (id: number) => {
    submitDelete.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries('get-house-by-id');
        toast.success('Success delete photo');
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
      {photos ? (
        photos?.map((datum, index) => {
          return (
            <tr key={datum?.id}>
              <td>{index + 1}</td>
              <td>
                <img src={datum?.photo} alt="" />
              </td>
              <td>
                <Button
                  onClick={() => handleDelete(datum?.id as number)}
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

export default TableHouseHostProfile;
