import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { InputPickupProps } from '../interface';
import style from './index.module.scss';
import InputRadio from './InputRadio';

const InputPickup: React.FC<InputPickupProps> = ({
  isReqPickup,
  pickupPrice,
  handlePickupPrice,
  city,
  house,
}) => {
  console.log(city);

  const handleIsPickup = () => {
    if (house?.city?.id === city) {
      handlePickupPrice(100000, true);
    }
    handlePickupPrice(300000, true);
  };

  const handleNotPickup = () => {
    handlePickupPrice(0, false);
  };
  return (
    <div className={style.input__pickup}>
      <h5>Do you want to request pickup ? </h5>
      <div className={style.input__pickup__wrapper}>
        <InputRadio
          label="Yes"
          isPickup={isReqPickup === true}
          onClick={handleIsPickup}
        />
        <InputRadio
          label="No"
          isPickup={isReqPickup === false}
          onClick={handleNotPickup}
        />
      </div>
      {isReqPickup && (
        <p className={style.input__pickup__price}>
          You request pickup, so you have to pay pickup {pickupPrice}
        </p>
      )}
    </div>
  );
};

export default InputPickup;
