export type ApiErrorResponse = {
  message: string;
  code: number;
  description?: string;
};

export type BaseEntity = {
  id: string;
  createdAt: number;
  updatedAt: number;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

export type Meta = {
  page: number;
  total: number;
  totalPages: number;
};

export type User = Entity<{
  firstName: string;
  lastName: string;
  email: string;
  profileImageUrl: string;
  role: 'ADMIN' | 'USER';
  bio: string;
}>;

export type AuthResponse = {
  jwt: string;
  user: User;
};

export type Post = Entity<{
  title: string;
  body: string;
  topic: {
    name: string;
    path: string;
    slug: string;
  };
  author: User;
}>;

export type Comment = Entity<{
  body: string;
  discussionId: string;
  author: User;
}>;
