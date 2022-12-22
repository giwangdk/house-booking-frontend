import React from 'react';
import { AvatarProps } from '../interface';
import style from './index.module.scss';

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <React.StrictMode>
      <div className={style.avatar} style={{ backgroundColor: '#F5F5F5' }}>
        <img src={src} alt="" />
      </div>
    </React.StrictMode>
  );
};

export default Avatar;
