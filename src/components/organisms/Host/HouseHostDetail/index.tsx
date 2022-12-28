import React, { useState } from 'react';
import { Button } from '../../../atoms';
import { Card, InputLabel } from '../../../molecules';
import { DetailHouseProps } from '../../../molecules/interface';
import EditHouseHostDetail from './EditHouseHostDetail';
import style from './index.module.scss';

const HouseHostDetail: React.FC<DetailHouseProps> = ({ house }) => {
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
          <h5>House Detail</h5>
          <hr />
          <div className={style.card__house__profile__content}>
            <div className={style.card__house__profile__content__item}>
              <InputLabel
                label="Max Guest"
                value={house?.detail?.max_guest}
                disabled
              />
              <InputLabel
                label="Bedroom"
                value={house?.detail?.bedrooms}
                disabled
              />
            </div>
            <div className={style.card__house__profile__content__item}>
              <InputLabel label="Bed" value={house?.detail?.beds} disabled />
              <InputLabel
                label="Bathroom"
                value={house?.detail?.baths}
                disabled
              />
            </div>
          </div>
          <Button onClick={handleisOnEdit}>
            {house?.detail?.id === 0 ? 'Add House Detail' : 'Edit House Detail'}
          </Button>
        </>
      ) : (
        <EditHouseHostDetail house={house} handleClose={handleClose} />
      )}
    </Card>
  );
};

export default HouseHostDetail;
