import { primaryKey } from '@mswjs/data';
import { nanoid } from 'nanoid';

export type Model = keyof typeof models;

export const models = {
  user: {
    id: primaryKey(nanoid),
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    profileImageUrl: String,
    role: String,
    bio: String,
    createdAt: Date.now,
  },
  post: {
    id: primaryKey(nanoid),
    authorId: String,
    title: String,
    body: String,
    topic: {
      name: String,
      path: String,
      slug: String,
    },
    createdAt: Date.now,
    updatedAt: Date.now,
  },
  comment: {
    id: primaryKey(nanoid),
    postId: String,
    authorId: String,
    body: String,
    createdAt: Date.now,
    updatedAt: Date.now,
  },
};
