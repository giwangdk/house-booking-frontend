import React from 'react';
import { AuthHero } from '../organisms';
import style from './index.module.scss';

interface AuthLayoutProps {
  children: React.ReactNode;
  image?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  image,
}): JSX.Element => {
  return (
    <div className={style.auth__layout}>
      <div className={style.auth__layout__content}>
        <div className={style.auth__layout__content__icon}>
          <AuthHero image={image} />
        </div>
        <div className={style.auth__layout__content__form}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
