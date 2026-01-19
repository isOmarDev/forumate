import { createPost, createUser } from '../../data-generators';

import { db } from './db';
import { persistDb } from './db-storage';

const omitId = <T extends { id: any }>(obj: T): Omit<T, 'id'> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ...rest } = obj;
  return rest;
};

export const seedUsers = async (count: number = 10) => {
  if (db.user.count() > 0) return;

  for (let i = 0; i < count; i++) {
    const user = omitId(createUser());
    db.user.create(user);
  }

  await persistDb('user');
};

export const seedPosts = async (count: number = 20) => {
  if (db.post.count() > 0) return;

  const users = db.user.getAll();

  const authorIds = users.slice(0, 5).map((author) => author.id);

  for (let i = 0; i < count; i++) {
    const randAuthorIndex = Math.floor(
      Math.random() * authorIds.length,
    );

    const post = omitId(
      createPost({
        authorId: authorIds[randAuthorIndex],
      }),
    );

    db.post.create(post);
  }

  await persistDb('post');
};

export const seedDb = async () => {
  await seedUsers();
  await seedPosts();
};
