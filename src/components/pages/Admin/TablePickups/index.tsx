import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Button } from '../../../atoms';
import { TablePickupsProps } from '../../interface';
import ModalEditStatus from '../ModalEditStatus';
import style from './index.module.scss';

const TablePickups: React.FC<TablePickupsProps> = (props) => {
  const { isLoading, pickups } = props;
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <Button onClick={handleShow}>Edit Status</Button>
              </td>
              <ModalEditStatus
                show={show}
                handleCloseModal={handleClose}
                id={datum.id}
              />
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
