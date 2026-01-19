import { faker } from '@faker-js/faker';

import { paths } from '@/config/paths';
import type { User } from '@/types/api';
import { createAvatar } from '@/utils/create-avatar';

import { slugify } from './mocks/utils';

const generateUser = () => ({
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: 'TestPassword123!',
  profileImageUrl: createAvatar(),
  role: 'USER' as User['role'],
  bio: faker.lorem.paragraph(),
  createdAt: Date.now(),
});

export const createUser = <
  T extends Partial<ReturnType<typeof generateUser>>,
>(
  overrides?: T,
) => {
  return { ...generateUser(), ...overrides };
};

const generatePost = () => {
  const topics = [
    {
      title: 'News & Updates',
      path: paths.topics.topic.getHref(slugify('news and updates')),
      slug: slugify('news and updates'),
    },
    {
      title: 'Ideas & Discussions',
      path: paths.topics.topic.getHref(
        slugify('ideas and discussions'),
      ),
      slug: slugify('ideas and discussions'),
    },
    {
      title: 'Questions & Help',
      path: paths.topics.topic.getHref(slugify('questions and help')),
      slug: slugify('questions and help'),
    },
    {
      title: 'Guides & Resources',
      path: paths.topics.topic.getHref(
        slugify('guides and Resources'),
      ),
      slug: slugify('guides and Resources'),
    },
  ];

  const randomTopic = topics[Math.floor(Math.random() * 4)];

  return {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(3),
    topic: {
      name: randomTopic.title,
      path: randomTopic.path,
      slug: randomTopic.slug,
    },
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
};

export const createPost = <
  T extends Partial<ReturnType<typeof generatePost>>,
>(
  overrides?: T & { authorId: string },
) => {
  return { ...generatePost(), ...overrides };
};
