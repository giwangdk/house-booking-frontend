import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import {
  BookingProps,
  ErrorBooking,
  FormReturnBooking,
} from '../../../../helpers/types/rent.interface';
import { DateContext } from '../../../../context/date-context';
import moment from 'moment';
import {
  getUserDetails,
  submitReservation,
} from '../../../../services/service';
import { useNavigate, useParams } from 'react-router-dom';
import { IReservation } from '../../../../helpers/types';
import { useMutation, useQuery } from 'react-query';
import useAuth from '../../../../hooks/useAuth';
import { setUser } from '../../../../redux/authenticationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

function useForm(
  validateInfo: (values: BookingProps) => BookingProps,
): FormReturnBooking<BookingProps> {
  const { user, isLoggedIn } = useAuth();
  const { totalPrice, isReqPickup } = useSelector(
    (state: RootState) => state.house,
  );

  const dispatch = useDispatch();
  if (isLoggedIn) {
    useQuery('get-user-detail', async () => {
      await getUserDetails().then((res) => {
        dispatch(setUser(res.data.data));
      });
    });
  }

  const [values, setValues] = useState<BookingProps>({
    name: user?.fullname as string | '',
    email: user?.email as string | '',
  });
  const { id } = useParams<{ id: string }>();
  const [city, setCity] = useState<number | undefined>(
    user?.city?.id as number | undefined,
  );
  const [errors, setErrors] = useState<ErrorBooking>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { mutateAsync, isLoading } = useMutation(submitReservation);
  const navigate = useNavigate();

  const { checkin_date, checkout_date, setCheckinDate, setCheckoutDate } =
    useContext(DateContext);

  const formattedCheckInDate = moment(checkin_date).format('YYYY-MM-DD');
  const formattedCheckOutDate = moment(checkout_date).format('YYYY-MM-DD');
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleChangeDropdown = (e: any) => {
    setCity(e.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors(validateInfo(values));
    setIsSubmitting(true);
    const data: IReservation = {
      fullname: values.name,
      email: values.email,
      city_id: city,
      check_in: formattedCheckInDate,
      check_out: formattedCheckOutDate,
      total_price: totalPrice as number,
      house_id: parseInt(id as string),
      is_request_pickup: isReqPickup,
    };

    if (
      Object.keys(errors?.name || {}).length === 0 &&
      Object.keys(errors?.email || {}).length === 0 &&
      isSubmitting
    ) {
      mutateAsync(data, {
        onSuccess: (res) => {
          toast.success('Success');
          setCheckinDate(moment(Date.now()).toDate());
          setCheckoutDate(moment().add(1, 'days').toDate());
          navigate(`/payment/${res?.data?.data?.booking_code}`);
        },
      });
    }
  };

  return {
    handleChange,
    handleChangeDropdown,
    handleSubmit,
    values,
    errors,
    city,
    setValues,
    setCity,
    isLoading,
  };
}

export default useForm;
