export interface ICity{
    id: number;
    name: string;
}

export interface IUser{
    id?: number;
    fullname?: string;
    email?: string;
    password: string;
    address?: string;
    photo?: string;
    city?: string;
}
