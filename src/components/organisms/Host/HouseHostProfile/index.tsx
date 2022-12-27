import React from 'react';
import { Button } from '../../../atoms';
import { Card, InputLabel } from '../../../molecules';
import { DetailHouseProps } from '../../../molecules/interface';
import style from './index.module.scss';

const HouseHostProfile: React.FC<DetailHouseProps> = ({ house }) => {
  return (
    <Card className={style.card__house__profile}>
      <h5>House Profile</h5>
      <div className={style.card__house__profile__content}>
        <InputLabel label="Name" value={house?.name} disabled />
        <InputLabel label="Price" value={house?.price} disabled />
        <InputLabel label="Location" value={house?.location} disabled />
        <InputLabel label="City" value={house?.city.name} disabled />
      </div>
      <Button>Edit</Button>
    </Card>
  );
};

export default HouseHostProfile;
