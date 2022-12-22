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
}

export interface IWallet {
  ID?: number;
  balance?: number;
}
