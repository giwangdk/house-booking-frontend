import React from 'react';
import style from './index.module.scss';
import { FaUserCircle, FaHandPaper } from 'react-icons/fa';
import { CoinProps } from '../interface';
import classNames from 'classnames';

const Coin: React.FC<CoinProps> = ({ result, isLoading }) => {
  const classProps = classNames(
    style.card__game__coin__icon,
    isLoading && style.card__game__coin__loading,
  );

  return (
    <div className={style.card__game__coin}>
      <div className={classProps}>
        {result === 'head' ? <FaUserCircle /> : <FaHandPaper />}
      </div>
    </div>
  );
};

export default Coin;
