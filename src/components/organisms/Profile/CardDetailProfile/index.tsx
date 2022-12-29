/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Button } from '../../../atoms';
import CardEditDetailProfile from '../CardEditDetailProfile';
import CardEditPassword from '../CardEditPassword';
import CardDetailProfileItem from './CardDetailProfileItem';
import style from './index.module.scss';

const CardDetailProfile: React.FC = () => {
  const { user } = useAuth();
  const [isEdit, setIsEdit] = useState(false);
  const [isEditPassword, setIsEditPassword] = useState(false);

  console.log(user?.city);

  const details = [
    {
      label: 'Full Name',
      item: user?.fullname,
    },
    {
      label: 'Email',
      item: user?.email,
    },
    {
      label: 'Address',
      item: user?.address,
    },
    {
      label: 'City',
      item: user?.city?.name,
    },
  ];

  const handleSetEdit = () => {
    setIsEdit(true);
  };

  const handleCloseEdit = () => {
    setIsEdit(false);
  };

  const handleSetEditPassword = () => {
    setIsEditPassword(true);
  };

  const handleCloseEditPassword = () => {
    setIsEditPassword(false);
  };

  return (
    <div className={style.card__detail}>
      <div className={style.card__detail__header}>
        <h5>More Detail</h5>
        <p onClick={handleSetEdit}>Edit Profile</p>
      </div>
      {!isEdit ? (
        <div className={style.card__detail__content}>
          {details.map((detail) => (
            <CardDetailProfileItem
              key={detail.item}
              label={detail.label}
              item={detail.item}
            />
          ))}
        </div>
      ) : (
        <CardEditDetailProfile handleCloseEdit={handleCloseEdit} />
      )}
      {!isEditPassword ? (
        <Button className={style.button} onClick={handleSetEditPassword}>
          Change Password
        </Button>
      ) : (
        <CardEditPassword handleCloseEdit={handleCloseEditPassword} />
      )}
    </div>
  );
};

export default CardDetailProfile;
