import React, { useState } from 'react';
import { Button } from '../../../atoms';
import { Card, InputLabel, TextAreaLabel } from '../../../molecules';
import { DetailHouseProps } from '../../../molecules/interface';
import style from './index.module.scss';
import EditHouseHostProfile from './EditHouseHostProfile';
const HouseHostProfile: React.FC<DetailHouseProps> = ({ house }) => {
  const [isOnEdit, setIsOnEdit] = useState(false);

  const handleClose = () => {
    setIsOnEdit(false);
  };

  const handleisOnEdit = () => {
    setIsOnEdit(true);
  };

  return (
    <Card className={style.card__house__profile}>
      {!isOnEdit ? (
        <>
          <h5>House Profile</h5>
          <hr />
          <div className={style.card__house__profile__content}>
            <InputLabel label="Name" value={house?.name} disabled />
            <InputLabel label="Price" value={house?.price} disabled />
            <InputLabel label="Location" value={house?.location} disabled />
            <TextAreaLabel
              label="Description"
              value={house?.description}
              name="description"
              disabled
            />
            <InputLabel label="City" value={house?.city?.name} disabled />
          </div>
          <Button onClick={handleisOnEdit}>Edit</Button>
        </>
      ) : (
        <EditHouseHostProfile house={house} handleClose={handleClose} />
      )}
    </Card>
  );
};

export default HouseHostProfile;
