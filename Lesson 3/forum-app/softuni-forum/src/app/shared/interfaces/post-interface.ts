import { UserId } from './user-interface';

export interface PostInt {
  // likes:string[]
  id: string;
  text: string;
  userId: UserId;
  themeId: string;
  created_at: Date;
}
