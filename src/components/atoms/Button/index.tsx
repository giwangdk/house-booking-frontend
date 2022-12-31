import React from 'react';
import style from './index.module.scss';
import { ButtonProps } from '../interface';
import classNames from 'classnames';
import { ClipLoader } from 'react-spinners';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    onClick,
    variant = 'primary',
    type,
    loading,
    size = 'medium',
    border = 'pill',
    disabled,
    className,
  } = props;
  const classProps = classNames(
    style.button,
    className,
    style[variant],
    style[size],
    style[border],
    disabled && style.disabled,
    loading && style.loading,
  );
  return (
    <button
      onClick={onClick}
      data-testid="button-test-id"
      className={classProps}
      type={type}
      disabled={disabled}
    >
      {loading ? (
        <div className={style.button__loading}>
          <ClipLoader size={20} />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
