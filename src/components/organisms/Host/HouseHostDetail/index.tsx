import React from 'react';
import { Button } from '../../../atoms';
import { Card, InputLabel } from '../../../molecules';
import { DetailHouseProps } from '../../../molecules/interface';
import style from './index.module.scss';

const HouseHostDetail: React.FC<DetailHouseProps> = ({ house }) => {
  return (
    <Card className={style.card__house__profile}>
      <h5>House Detail</h5>
      <div className={style.card__house__profile__content}>
        <InputLabel
          label="Max Guest"
          value={house?.detail?.max_guest}
          disabled
        />
        <InputLabel label="Bedroom" value={house?.detail?.bedrooms} disabled />
        <InputLabel label="Bed" value={house?.detail?.beds} disabled />
        <InputLabel label="Bathroom" value={house?.detail?.baths} disabled />
      </div>
      <Button>Edit</Button>
    </Card>
  );
};

export default HouseHostDetail;
