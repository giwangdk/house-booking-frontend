import React from 'react';
import { CardHouse } from '../../organisms';
import style from './index.module.scss';

const ListCardHouse = (): JSX.Element => {
  return (
    <React.StrictMode>
      <div className={style.list__card__house}>
        <CardHouse />
      </div>
    </React.StrictMode>
  );
};

export default ListCardHouse;
