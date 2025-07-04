import { UserId } from './user-interface';

export interface ThemeInt {
  subscribers: string[];
  posts: string[];
  _id: string;
  themeName: string;
  userId: UserId;
  created_at: Date;
}
