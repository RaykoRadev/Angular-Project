export interface UserReg {
  username: string;
  email: string;
  password: string;
  repass: string;
}

export interface UserAuth {
  email: string;
  password: string;
}

export interface ServerResponce {
  email: string;
  role: string;
  token: string;
  username: string;
  _id: string;
}
