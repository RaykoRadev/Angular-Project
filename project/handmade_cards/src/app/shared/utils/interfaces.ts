export interface UserReg {
  username: string;
  email: string;
  password: string;
  // repass: string;
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
export interface CardInt {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
}

export interface CardResp {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  likes: string[];
  _id: string;
  //   createdAt: string;
  //   updatedAt: string;
}
