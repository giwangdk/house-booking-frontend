import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHouse } from '../helpers/types';
import { HouseState } from '../helpers/types/houser.interface';

const initialState: HouseState = {
  house: null,
  currentPrice: 0,
  totalPrice: 0,
  pickupPrice: 0,
  isReqPickup: false,
};

const setIsReqPickupReducer: CaseReducer<
  typeof initialState,
  PayloadAction<boolean>
> = (state, action) => {
  state.isReqPickup = action.payload;
};

const setHouseReducer: CaseReducer<
  typeof initialState,
  PayloadAction<IHouse | null>
> = (state, action) => {
  state.house = action.payload;
};

const setCurrentPriceReducer: CaseReducer<
  typeof initialState,
  PayloadAction<number>
> = (state, action) => {
  state.currentPrice = action.payload;
};

const setTotalPriceReducer: CaseReducer<
  typeof initialState,
  PayloadAction<number>
> = (state, action) => {
  state.totalPrice = action.payload;
};

const setPickupPriceReducer: CaseReducer<
  typeof initialState,
  PayloadAction<number>
> = (state, action) => {
  state.pickupPrice = action.payload;
};

const houseSlice = createSlice({
  name: 'house',
  initialState,
  reducers: {
    setIsReqPickup: setIsReqPickupReducer,
    setHouse: setHouseReducer,
    setCurrentPrice: setCurrentPriceReducer,
    setTotalPrice: setTotalPriceReducer,
    setPickupPrice: setPickupPriceReducer,
  },
});

export const {
  setIsReqPickup,
  setHouse,
  setCurrentPrice,
  setTotalPrice,
  setPickupPrice,
} = houseSlice.actions;

export const houseReducer = houseSlice.reducer;
