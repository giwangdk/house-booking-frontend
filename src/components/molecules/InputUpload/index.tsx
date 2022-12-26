import React from 'react';
import style from './index.module.scss';
import { Error, Input } from '../../atoms';

const InputUpload: React.FC = (props) => {
  return (
    <div className="file-uploader">
      <input type="file" />
    </div>
  );
};

export default InputUpload;
