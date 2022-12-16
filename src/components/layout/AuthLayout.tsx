import React from 'react';
import style from './index.module.scss';

interface AuthLayoutProps {
  children: React.ReactNode;
  image?: string;
  layout:string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  image,
  layout,

}): JSX.Element => {
  return (
    <div className={style.auth__layout}>
      <div className={style.auth__layout__content}>
        <div className={`${style.auth__layout__content__icon} ${style[layout]}`}>
          <img src={image} alt="" />
        </div>
        <div className={style.auth__layout__content__form}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
