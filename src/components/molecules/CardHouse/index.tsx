import React from 'react';
import style from './index.module.scss';

const CardHouse = (): JSX.Element => {
  return (
    <React.StrictMode>
      <div className={style.card__house}>
        <div className={style.card__house__image}>
          <img
            src="https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=1200"
            alt="house"
          />
        </div>
        <div className={style.card__house__info}>
          <h5>House in the middle of the forest fsjfhsjfhsj</h5>
          <p>Bali, Indonesia</p>
          <div className={style.card__house__info__price}>
            <p>$ 100</p>
            <p>per night</p>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default CardHouse;
