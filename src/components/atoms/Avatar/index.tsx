import React from 'react';
import { AvatarProps } from '../interface';
import style from './index.module.scss';
import { FaUserAlt } from 'react-icons/fa';
import classNames from 'classnames';

const Avatar: React.FC<AvatarProps> = ({ src, className }) => {
  const classProps = classNames(style.avatar, className);

  return (
      <div className={classProps} style={{ backgroundColor: '#F5F5F5' }}>
        {src ? <img src={src} alt="" /> : <FaUserAlt />}
      </div>
  );
};

export default Avatar;
