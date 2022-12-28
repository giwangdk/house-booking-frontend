import React, { useState } from 'react';
import { Button } from '../../../atoms';
import { Card, InputLabel } from '../../../molecules';
import { DetailHouseProps } from '../../../molecules/interface';
import style from './index.module.scss';
import EditHouseHostProfile from './EditHouseHostProfile';

const HouseHostProfile: React.FC<DetailHouseProps> = ({ house }) => {
  const [show, setShow] = useState(false);

  const handleCloseModal = () => {
    setShow(false);
  };

  const handleShowModal = () => {
    setShow(true);
  };

  return (
    <Card className={style.card__house__profile}>
      <h5>House Profile</h5>
      <hr />
      <div className={style.card__house__profile__content}>
        <InputLabel label="Name" value={house?.name} disabled />
        <InputLabel label="Price" value={house?.price} disabled />
        <InputLabel label="Location" value={house?.location} disabled />
        <InputLabel label="City" value={house?.city.name} disabled />
      </div>
      <Button onClick={handleShowModal}>Edit</Button>
      <EditHouseHostProfile
        show={show}
        house={house}
        handleCloseModal={handleCloseModal}
      />
    </Card>
  );
};

export default HouseHostProfile;
