import { totalmem } from 'os';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';
import { Button } from '../../atoms';
import { Card } from '../../molecules';
import Coin from './Coin';
import style from './index.module.scss';
import ModalCoin from './ModalCoin';

const CardGame = (): JSX.Element => {
  const { game } = useAuth();

  const [show, setShow] = useState(false);
  const [guess, setGuess] = useState<'head' | 'hand'>('head');
  const [chance, setChance] = useState(game?.chance as number);
  const [result, setResult] = useState('head');
  const [isLoading, setIsLoading] = useState(false);

  const res = ['head', 'hand'];

  const handleGuess = (guess: 'head' | 'hand') => {
    setGuess(guess);
  };

  const handleStartGame = () => {
    const random = Math.random() >= 0.5 ? 1 : 0;

    if (chance == 0) {
      toast.error('You have no chance left');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setResult(res[random]);
      setIsLoading(false);
      if (guess === result) {
        setShow(true);
      } else {
        setShow(true);
      }
    }, 1000);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <Card className={style.card__game}>
      <div className={style.card__game__header}>
        <h5>Coin Toss Game</h5>
        <p>Head (or) Hand</p>
      </div>
      <p>Your Chance : {chance}</p>
      <Coin result={result} isLoading={isLoading} />
      <div className={style.card__game__play}>
        <h6>Your guess:</h6>
        <Button
          onClick={() => handleGuess('head')}
          variant={guess == 'head' ? 'secondary' : 'primary'}
          disabled={chance == 0}
        >
          Head
        </Button>
        <Button
          onClick={() => handleGuess('hand')}
          variant={guess == 'hand' ? 'secondary' : 'primary'}
          disabled={chance == 0}
        >
          Hand
        </Button>
      </div>
      <Button
        onClick={handleStartGame}
        loading={isLoading}
        disabled={chance == 0}
      >
        Toss Coin
      </Button>
      <ModalCoin
        show={show}
        isWin={guess == result}
        handleCloseModal={handleCloseModal}
      />
    </Card>
  );
};

export default CardGame;
