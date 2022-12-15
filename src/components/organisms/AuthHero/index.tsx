import React from 'react';
import { AuthHeroProps } from '../interface';

const AuthHero: React.FC<AuthHeroProps> = ({ image }) => {
  return (
    <div className="">
      <img src={image} alt="" />
    </div>
  );
};

export default AuthHero;
