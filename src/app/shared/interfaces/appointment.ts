export interface IAppointment {
  id: number;
  user_id: number;
  user_name: string;
  doctor_id: number;
  doctor_name: string;
  date: string;
  time: string;
  status: string;
}

export interface IAppointmentWithoutId {
  user_id: number;
  user_name: string;
  doctor_id: number;
  doctor_name: string;
  date: string;
  time: string;
  status: string;
}
