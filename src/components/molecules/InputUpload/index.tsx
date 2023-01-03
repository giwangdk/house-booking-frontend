/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import style from './index.module.scss';
import { InputUploadProps } from '../interface';

const InputUpload: React.FC<InputUploadProps> = ({ onChange, value }) => {
  return (
    <div className={style.uploader}>
      <input
        className={style.uploader__input}
        type="file"
        onChange={onChange}
        required
        id="file"
        hidden
      />
      <label className={style.uploader__label} htmlFor="file">
        Choose File
      </label>
      <span>{value ? value.name : 'No File Chosen'}</span>
    </div>
  );
};

export default InputUpload;
