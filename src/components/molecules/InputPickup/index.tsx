import moment from 'moment';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DateContext } from '../../../context/date-context';
import useAuth from '../../../hooks/useAuth';
import { setIsReqPickup, setTotalPrice } from '../../../redux/houseSlice';
import { RootState } from '../../../redux/store';
import { InputPickupProps } from '../interface';
import style from './index.module.scss';
import InputRadio from './InputRadio';

const InputPickup: React.FC<InputPickupProps> = ({ city }) => {
  const { house, pickupPrice, currentPrice, isReqPickup, totalPrice } =
    useSelector((state: RootState) => state.house);
  const dispatch = useDispatch();
  const { checkin_date, checkout_date } = useContext(DateContext);
  console.log(city, 'user city');
  console.log(house?.city?.id, 'house city');
  console.log(house?.city?.id === city, 'house city == user city');

  const handleIsPickup = () => {
    dispatch(setIsReqPickup(true));
    dispatch(setTotalPrice(Number(pickupPrice) + Number(totalPrice)));
  };

  const day = moment(checkout_date).diff(checkin_date, 'days');

  const handleNotPickup = () => {
    dispatch(setIsReqPickup(false));
    dispatch(setTotalPrice(currentPrice * day));
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
      <p className={style.input__pickup__price}>
        Pickup price for same city: Rp. 100.000
      </p>
      <p className={style.input__pickup__price}>
        Pickup price for different city: Rp. 300.000
      </p>
    </div>
  );
};

export default InputPickup;
