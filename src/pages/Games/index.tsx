import React from 'react';
import { CardGame, Container } from '../../components';
import style from './index.module.scss';

const Games = (): JSX.Element => {
  return (
    <div className={style.game__page}>
      <Container>
        <CardGame />
      </Container>
    </div>
  );
};

export default Games;
