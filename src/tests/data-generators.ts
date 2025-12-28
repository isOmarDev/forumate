import { faker } from '@faker-js/faker';

import { paths } from '@/config/paths';
import type { User } from '@/types/api';
import { createAvatar } from '@/utils/create-avatar';

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
      path: paths.topics.newsAndUpdates.path,
    },
    {
      title: 'Ideas & Discussions',
      path: paths.topics.ideasAndDiscussions.path,
    },
    {
      title: 'Questions & Help',
      path: paths.topics.questionsAndHelp.path,
    },
    {
      title: 'Guides & Resources',
      path: paths.topics.guidesAndResources.path,
    },
  ];

  const randomTopic = topics[Math.floor(Math.random() * 4)];

  return {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(3),
    topic: randomTopic.title,
    topicPath: randomTopic.path,
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
