import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  CardDetailBooking,
  CardFormBooking,
  Container,
  ModalWarning,
} from '../../components';
import { DateContext } from '../../context/date-context';
import { IHouseDetailResponse } from '../../helpers/types';
import {
  setCurrentPrice,
  setHouse,
  setTotalPrice,
} from '../../redux/houseSlice';
import { RootState } from '../../redux/store';
import { getHouseById } from '../../services/service';
import style from './index.module.scss';

const Booking = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const { checkin_date, checkout_date } = useContext(DateContext);
  const { pickupPrice, isReqPickup } = useSelector(
    (state: RootState) => state.house,
  );
  const day = moment(checkout_date).diff(moment(checkin_date), 'days');
  const { data } = useQuery<IHouseDetailResponse>('get-house-by-id', () =>
    getHouseById(id as string).then((res) => {
      dispatch(setHouse(res.data.data));
      return res.data;
    }),
  );

  useEffect(() => {
    sessionStorage.setItem('price', JSON.stringify(data?.data?.price));
    dispatch(setCurrentPrice(data?.data?.price as number));
    dispatch(
      setTotalPrice(
        isReqPickup
          ? Number(data?.data?.price) * day + pickupPrice
          : Number(data?.data?.price) * day,
      ),
    );
  }, []);

  const handleShowModal = () => {
    setShow(true);
  };

  useEffect(() => {
    const price = sessionStorage.getItem('price');
    if (
      JSON.parse(price as string) !== null &&
      data?.data?.price !== null &&
      JSON.parse(price as string) !== data?.data?.price
    ) {
      handleShowModal();
    }
  }, [data?.data?.price]);

  const handleCloseModal = () => {
    setCurrentPrice(data?.data?.price as number);
    setShow(false);
  };
  const handleExitModal = () => {
    setShow(false);
    navigate('/');
  };

  return (
    <div className={style.booking}>
      <Container className={style.booking__container}>
        <CardFormBooking />
        <CardDetailBooking />
        <ModalWarning
          show={show}
          handleCloseModal={handleCloseModal}
          handleExitModal={handleExitModal}
        />
      </Container>
    </div>
  );
};

export default Booking;
