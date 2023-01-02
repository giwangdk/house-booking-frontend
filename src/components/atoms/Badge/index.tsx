import React from 'react';
import style from './index.module.scss';
import { BadgeProps } from '../interface';
import classNames from 'classnames';
import { ClipLoader } from 'react-spinners';

const Badge: React.FC<BadgeProps> = (props) => {
  const {
    children,
    variant = 'primary',
    size = 'medium',
    border = 'pill',
    className,
  } = props;
  const classProps = classNames(
    style.badge,
    className,
    style[variant],
    style[size],
    style[border],
  );
  return (
    <div data-testid="badge-test-id" className={classProps}>
      {children}
    </div>
  );
};

export default Badge;
