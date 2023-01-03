import React from 'react';
import style from './index.module.scss';
import { Error, Input } from '../../atoms';
import { InputLabelProps } from '../interface';

const InputLabel: React.FC<InputLabelProps> = (props) => {
  const { label = 'label', required, message, ...rest } = props;
  return (
    <div className={style.form__input}>
      <label className={style.form__input__label}>
        {label} <span>{required && '*'} </span>{' '}
      </label>
      <Input {...rest} />
      <Error message={message} />
    </div>
  );
};

export default InputLabel;
