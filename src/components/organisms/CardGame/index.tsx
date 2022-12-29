import React, { useEffect, useState } from 'react';
import { Button } from '../../atoms';
import { Card } from '../../molecules';
import Coin from './Coin';
import style from './index.module.scss';

const CardGame = (): JSX.Element => {
  const [guess, setGuess] = useState<'head' | 'hand'>('head');
  const [result, setResult] = useState('head');
  const [isLoading, setIsLoading] = useState(false);

  const res = ['head', 'hand'];

  const handleGuess = (guess: 'head' | 'hand') => {
    setGuess(guess);
  };

  const handleStartGame = () => {
    const random = Math.random() >= 0.5 ? 1 : 0;
    console.log(res[random]);

    setIsLoading(true);
    setTimeout(() => {
      setResult(res[random]);
      setIsLoading(false);
      if (guess === result) {
        console.log('You win');
      } else {
        console.log('You lose');
      }
    }, 1000);
  };

  return (
    <Card className={style.card__game}>
      <div className={style.card__game__header}>
        <h5>Coin Toss Game</h5>
        <p>Head (or) Hand</p>
      </div>
      <Coin result={result} isLoading={isLoading} />
      <div className={style.card__game__play}>
        <h6>Your guess:</h6>
        <Button
          onClick={() => handleGuess('head')}
          variant={guess == 'head' ? 'secondary' : 'primary'}
        >
          Head
        </Button>
        <Button
          onClick={() => handleGuess('hand')}
          variant={guess == 'hand' ? 'secondary' : 'primary'}
        >
          Hand
        </Button>
      </div>
      <Button onClick={handleStartGame} loading={isLoading}>
        Toss Coin
      </Button>
    </Card>
  );
};

export default CardGame;
