import classNames from 'classnames';
import React from 'react';
import { ModalProps } from '../interface';
import style from './index.module.scss';
const Modal: React.FC<ModalProps> = ({ children, show, className }) => {
  const classProps = classNames(style.modal__main, className);

  if (show) {
    return (
      <div className={!show ? style.hide : style.show}>
        <section className={classProps}>{children}</section>
      </div>
    );
  }

  return <></>;
};

export default Modal;
