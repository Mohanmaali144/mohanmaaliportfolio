export interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

export interface Idea {
  id: string;
  name: string;
  email: string;
  title?: string;
  content: string;
  imageUrl?: string;
  likes: number;
  dislikes: number;
  comments: Comment[];
  timestamp: string;
  xp: number;
}
