import classNames from 'classnames';
import React from 'react';
import { InputProps } from '../interface';
import style from './index.module.scss';

const Input: React.FC<InputProps> = (props) => {
  const {
    type = 'text',
    name,
    placeholder,
    errors,
    value,
    onChange,
    disabled = false,
  } = props;

  const classProps = classNames(
    style.input,
    disabled ? style.input__disabled : '',
    errors ? style.input__error : '',
  );
  return (
    <React.StrictMode>
      <input
        type={type}
        className={classProps}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </React.StrictMode>
  );
};

export default Input;
