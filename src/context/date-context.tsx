/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState } from 'react';
import moment from 'moment';

export const DateContext = createContext({
  checkin_date: moment(Date.now()).toDate(),
  checkout_date: moment().add(1, 'days').toDate(),
  setCheckinDate: (date: Date) => {},
  setCheckoutDate: (date: Date) => {},
});

export function DateProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [checkin_date, setCheckinDate] = useState(moment(Date.now()).toDate());
  const [checkout_date, setCheckoutDate] = useState(
    moment().add(1, 'days').toDate(),
  );

  return (
    <DateContext.Provider
      value={{ checkin_date, checkout_date, setCheckinDate, setCheckoutDate }}
    >
      {children}
    </DateContext.Provider>
  );
}
