/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { queryClient } from '../../../../helpers/queryClient';
import { submitAddHousePhoto } from '../../../../services/service';
import { Button } from '../../../atoms';
import { InputUpload, Modal } from '../../../molecules';
import { ModalAddProps } from '../../interface';
import style from './index.module.scss';
const ModalAddPhoto: React.FC<ModalAddProps> = ({
  show,
  handleCloseModal,
  house,
}) => {
  const [photos, setPhotos] = useState<File>();
  const addPhoto = submitAddHousePhoto(house?.id as number);
  const submitPhoto = useMutation((data: FormData) => addPhoto(data));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', photos as File);

    submitPhoto.mutate(formData, {
      onSuccess: async () => {
        await queryClient.invalidateQueries('get-house-by-id');
        toast.success('Add Photo Success');
        handleCloseModal();
      },
    });
  };

  return (
    <Modal className={style.modal__house__detail} show={show}>
      <div className={style.modal__header}>
        <h6>Add House</h6>
        <Button
          onClick={handleCloseModal}
          border="pill"
          className={style.modal__header__button}
        >
          X
        </Button>
      </div>
      <form
        className={style.card__house__profile__content}
        onSubmit={handleSubmit}
      >
        <InputUpload onChange={handleChange} value={photos} />
        <Button loading={submitPhoto.isLoading} type="submit">
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default ModalAddPhoto;
