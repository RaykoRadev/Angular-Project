export interface UserReg {
  username: string;
  email: string;
  password: string;
  repass: string;
}

export interface UserLog {
  email: string;
  password: string;
}

export interface ServRespUserData {
  email: string;
  role: string;
  token: string;
  username: string;
  _id: string;
}
