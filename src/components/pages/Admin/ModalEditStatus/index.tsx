/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { queryClient } from '../../../../helpers/queryClient';
import {
  IPickupStatus,
  IPickupStatusResponse,
} from '../../../../helpers/types';
import {
  getPickups,
  getPickupStatus,
  submitAddHousePhoto,
  submitUpdatePickupStatus,
} from '../../../../services/service';
import { Button } from '../../../atoms';
import { Dropdown, Modal } from '../../../molecules';
import { ModalEditProps } from '../../interface';
import style from './index.module.scss';

const ModalEditStatus: React.FC<ModalEditProps> = ({
  show,
  handleCloseModal,
  pickup,
}) => {
  const { data } = useQuery<IPickupStatusResponse>('get-pickup-status', () =>
    getPickupStatus().then((res) => {
      return res.data.data;
    }),
  );

  const [status, setStatus] = useState<number>(pickup?.id as number);
  const options = data?.data?.map((item) => ({
    value: item.id,
    label: item.status,
  }));
  const handelChange = (e: any) => {
    setStatus(e.value);
  };

  const updateStatus = submitUpdatePickupStatus(pickup?.id as number);
  const submitStatus = useMutation((data: { pickup_status_id: number }) =>
    updateStatus(data),
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitStatus.mutate(
      { pickup_status_id: status },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries('get-pickups');
          toast.success('Update Pickup Status Success');
          handleCloseModal();
        },
      },
    );
  };

  return (
    <Modal className={style.modal} show={show}>
      <div className={style.modal__header}>
        <h6>Edit Pickup Status</h6>
        <Button
          onClick={handleCloseModal}
          border="pill"
          className={style.modal__header__button}
        >
          X
        </Button>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <Dropdown
          values={options as any}
          value={status}
          onChange={handelChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Modal>
  );
};

export default ModalEditStatus;
