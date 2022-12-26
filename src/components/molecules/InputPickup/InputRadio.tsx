/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames';
import React from 'react';
import { InputRadioProps } from '../interface';
import style from './index.module.scss';

const InputRadio: React.FC<InputRadioProps> = ({
  label,
  isPickup,
  onClick,
}): JSX.Element => {
  const classProps = classNames(
    style.input__pickup__radio,
    isPickup ? style.input__pickup__radio__active : '',
  );

  return (
    <div className={classProps} onClick={onClick}>
      {label}
    </div>
  );
};

export default InputRadio;
