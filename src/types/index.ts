export interface Examiner {
  cohort?: string;
  track?: string;
  stations?: string[];
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  speciality?: string;
  location?: string;
  password?: string;
  confirmPassword?: string;
}

export interface Station {
  id: number;
  stationName: string;
  location: string;
  assignedExaminers: number;
  track?: string;
  stations?: string[];
}
