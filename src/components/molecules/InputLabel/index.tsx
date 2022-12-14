import React from 'react';
import style from './index.module.scss';
import { Input } from '../../atoms';
import { InputLabelProps } from './interface ';

const InputLabel: React.FC<InputLabelProps> = (props) => {
  const { label = 'label', ...rest } = props;
  return (
    <div className={style.form__input}>
      <label className={style.form__input__label}>{label}</label>
      <Input {...rest} />
    </div>
  );
};

export default InputLabel;
