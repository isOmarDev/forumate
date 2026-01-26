import Cookies from 'js-cookie';
import { HttpResponse, http } from 'msw';

import { env } from '@/config/env';
import { createAvatar } from '@/tests/create-avatar';

import { persistDb } from '../db/data-storage';
import { db } from '../db/db';
import {
  authenticate,
  hash,
  requireAuth,
  AUTH_COOKIE,
  networkDelay,
} from '../utils';

type RegisterBody = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type LoginBody = {
  email: string;
  password: string;
};

const BASE_PATH = `${env.APP_API_URL}/auth` as const;

export const authPaths = {
  login: `${BASE_PATH}/login`,
  register: `${BASE_PATH}/register`,
  logout: `${BASE_PATH}/logout`,
  me: `${BASE_PATH}/me`,
} as const;

export const authHandlers = [
  // Register handler
  http.post(authPaths.register, async ({ request }) => {
    await networkDelay();
    try {
      const userObject = (await request.json()) as RegisterBody;

      const existingUser = db.user.findFirst({
        where: {
          email: {
            equals: userObject.email,
          },
        },
      });

      if (existingUser) {
        return HttpResponse.json(
          { message: 'The user already exists' },
          { status: 400 },
        );
      }

      db.user.create({
        ...userObject,
        profileImageUrl: createAvatar(),
        role: 'USER',
        password: hash(userObject.password),
      });

      await persistDb('user');

      const result = authenticate({
        email: userObject.email,
        password: userObject.password,
      });

      // todo: remove once tests in Github Actions are fixed
      Cookies.set(AUTH_COOKIE, result.jwt, { path: '/' });

      return HttpResponse.json(result, {
        headers: {
          // with a real API servier, the token cookie should also be Secure and HttpOnly
          'Set-Cookie': `${AUTH_COOKIE}=${result.jwt}; Path=/;`,
        },
      });
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 500 },
      );
    }
  }),

  // Login handler
  http.post(authPaths.login, async ({ request }) => {
    await networkDelay();

    try {
      const credentials = (await request.json()) as LoginBody;
      const result = authenticate(credentials);

      // todo: remove once tests in Github Actions are fixed
      Cookies.set(AUTH_COOKIE, result.jwt, { path: '/' });

      return HttpResponse.json(result, {
        headers: {
          // with a real API servier, the token cookie should also be Secure and HttpOnly
          'Set-Cookie': `${AUTH_COOKIE}=${result.jwt}; Path=/;`,
        },
      });
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 500 },
      );
    }
  }),

  // Logout handler
  http.post(authPaths.logout, async () => {
    await networkDelay();

    // todo: remove once tests in Github Actions are fixed
    Cookies.remove(AUTH_COOKIE);

    return HttpResponse.json(
      { message: 'Logged out' },
      {
        headers: {
          'Set-Cookie': `${AUTH_COOKIE}=; Path=/;`,
        },
      },
    );
  }),

  // Me handler
  http.get(authPaths.me, async ({ cookies }) => {
    await networkDelay();

    try {
      const { user } = requireAuth(cookies);
      return HttpResponse.json({ data: user });
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 500 },
      );
    }
  }),
];
