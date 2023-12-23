export interface IAuthResponse {
  token: string;
  data: {
    id: number;
    email: string;
    password: string;
    fullName: string;
    age: number;
    gender: string;
  };
}
