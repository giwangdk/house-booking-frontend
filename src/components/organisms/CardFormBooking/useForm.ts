import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import {
  BookingProps,
  ErrorBooking,
  FormReturnBooking,
} from '../../../helpers/types/rent.interface';
import { DateContext } from '../../../context/date-context';
import moment from 'moment';
import { submitReservation } from '../../../services/service';
import { useParams } from 'react-router-dom';
import { IReservation } from '../../../helpers/types';
import { useMutation } from 'react-query';
import useAuth from '../../../hooks/useAuth';

function useForm(
  validateInfo: (values: BookingProps) => BookingProps,
  currentPrice: number,
): FormReturnBooking<BookingProps> {
  const [values, setValues] = useState<BookingProps>({
    name: '',
    email: '',
  });
  const { id } = useParams<{ id: string }>();
  const [city, setCity] = useState<number | null>(null);
  const [errors, setErrors] = useState<ErrorBooking>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { mutateAsync, isLoading } = useMutation(submitReservation);

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
    console.log(city);
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
      total_price:
        currentPrice * moment(checkout_date).diff(checkin_date, 'days'),
      house_id: parseInt(id as string),
    };

    if (
      Object.keys(errors?.name || {}).length === 0 &&
      Object.keys(errors?.email || {}).length === 0 &&
      isSubmitting
    ) {
      mutateAsync(data, {
        onSuccess: () => {
          toast.success('Success');
          setCheckinDate(moment(Date.now()).toDate());
          setCheckoutDate(moment().add(1, 'days').toDate());
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
    setValues,
    setCity,
  };
}

export default useForm;
