export interface ICity {
  id: number | undefined;
  name: string | undefined;
}

export interface IUser {
  id?: number;
  fullname?: string;
  email?: string;
  password: string;
  address?: string;
  photo?: string;
  city?: ICity;
  role?: string;
}

export interface IWallet {
  ID?: number;
  balance?: number;
}

export interface IHousePhoto {
  id?: number;
  photo?: string;
}

export interface IGame {
  id?: number;
  chance?: number;
  total_games_played?: number;
}

export interface IHouseDetail {
  id?: number;
  max_guest?: number;
  bedrooms?: number;
  beds?: number;
  baths?: number;
  houser_facilities?: string;
  house_rules?: string;
  house_services?: string;
  bathroom_facilities?: string;
}

export interface IHouse {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  location?: string;
  user: IUser;
  city: ICity;
  photos: IHousePhoto[];
  detail: IHouseDetail;
}

export interface IReservation {
  id?: number;
  check_in?: string;
  check_out?: string;
  total_price?: number;
  fullname?: string;
  email?: string;
  city_id?: number | null;
  expired?: string;
  house?: IHouse;
  house_id?: number | null;
  booking_code?: string;
  is_request_pickup?: boolean;
  user?: IUser;
}

export interface ITransaction {
  booking_code?: string;
}

export interface ITopup {
  amount: number;
}

export interface IPickupStatus {
  id?: number;
  status?: string;
}

export interface IPickup {
  id?: number;
  reservation_id?: number;
  user_id?: number;
  pickup_status_id?: IPickupStatus;
  pickup_status?: IPickupStatus;
}
