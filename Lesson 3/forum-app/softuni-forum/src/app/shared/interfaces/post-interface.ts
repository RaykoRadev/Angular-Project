import { ThemeInt } from './theme-interface';
import { UserId } from './user-interface';

export interface PostInt {
  // likes:string[]
  id: string;
  text: string;
  userId: UserId;
  themeId: ThemeInt;
  created_at: Date;
}
