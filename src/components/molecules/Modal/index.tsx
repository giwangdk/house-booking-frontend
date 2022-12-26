import React from 'react';
import { Button } from '../../atoms';
import { ModalProps } from '../interface';
import style from './index.module.scss';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Modal: React.FC<ModalProps> = ({ children, handleClose, show, type }) => {
  return (
    <div className={show ? style.show : style.hide}>
      <section className={style.modal__main}>
        <div className={style.modal__main__success}>
          <BsFillCheckCircleFill />
          <p>{type} Success</p>
        </div>
        {children}
        <div className={style.button}>
          <Button>Submit</Button>
          <Button>Close</Button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
