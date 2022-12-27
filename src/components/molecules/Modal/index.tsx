import React from 'react';
import { ModalProps } from '../interface';
import style from './index.module.scss';
const Modal: React.FC<ModalProps> = ({ children, show }) => {
  if(show){
    return(
      <div className={!show ? style.hide : style.show}>
      <section className={style.modal__main}>
        {children}
      </section>
    </div>
    )
  }

  return (
    <></>
  )
};

export default Modal;
