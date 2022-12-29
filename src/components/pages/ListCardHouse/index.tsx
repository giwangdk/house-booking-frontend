import React from 'react';
import { CardHouse } from '../../organisms';
import { ListCardProps } from '../interface';
import style from './index.module.scss';

const ListCardHouse: React.FC<ListCardProps> = ({ data }): JSX.Element => {
  console.log('hereee', data);
  return (
    <div className={style.list__card__house}>
      {data ? (
        data?.map((item) => <CardHouse key={item.name} house={item} />)
      ) : (
        <h1>no data</h1>
      )}
    </div>
  );
};

export default ListCardHouse;
