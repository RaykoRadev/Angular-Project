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
  createdAt?: string;
  updatedAt?: string;
}

export interface UserProf {
  _id: string;
  username: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

//* cards

export interface CardInitForm {
  title: string;
  description: string;
  category?: string;
}

export interface CardIntFull {
  title: string;
  description: string;
  category?: string;
  imageUrl: string;
  author: string;
}

//! lets see if is gona work if author is an object

// export interface CardResp {
//   title: string;
//   description: string;
//   imageUrl: string;
//   category: string;
//   author: string;
//   likes: string[];
//   _id: string;
//   createdAt: string;
//   updatedAt: string;
// }
export interface CardResp {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  author: Author;
  likes: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CardGetAllR {
  data: CardResp[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

interface Author {
  _id: string;
  username: string;
  email: string;
}
