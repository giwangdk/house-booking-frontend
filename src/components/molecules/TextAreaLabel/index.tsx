import React from 'react';
import style from './index.module.scss';
import { TextAreaProps } from '../interface';
import classNames from 'classnames';

const TextAreaLabel: React.FC<TextAreaProps> = (props) => {
  const {
    label = 'label',
    name,
    onChange,
    value,
    placeholder,
    disabled,
  } = props;

  const classProps = classNames(
    style.textarea,
    disabled ? style.textarea__disabled : '',
  );
  return (
    <div className={style.form__input}>
      <label className={style.form__input__label}>{label}</label>
      <textarea
        name={name}
        onChange={onChange}
        className={classProps}
        rows={5}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default TextAreaLabel;
