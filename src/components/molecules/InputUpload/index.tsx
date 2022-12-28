import React from 'react';
import style from './index.module.scss';
import { Error, Input } from '../../atoms';
import { InputUploadProps } from '../interface';

const InputUpload: React.FC<InputUploadProps> = ({ onChange, value }) => {
  return (
    <div className="file-uploader">
      <input type="file" onChange={onChange} value={value as string} required />
    </div>
  );
};

export default InputUpload;
