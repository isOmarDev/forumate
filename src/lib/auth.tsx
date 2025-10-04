import type { AxiosError } from 'axios';
import { configureAuth } from 'react-query-auth';
import { Navigate, useLocation } from 'react-router';
import { z } from 'zod';

import { paths } from '@/config/paths';
import type {
  ApiErrorResponse,
  AuthResponse,
  User,
} from '@/types/api';

import { api } from './api-client';

const BASE_PATH = 'auth';
const authPaths = {
  login: `${BASE_PATH}/login`,
  register: `${BASE_PATH}/register`,
  logout: `${BASE_PATH}/logout`,
  me: `${BASE_PATH}/me`,
};

// Login user
export const loginInputSchema = z.object({
  email: z
    .email({ error: 'Invalid email address' })
    .min(1, { error: 'Email is required' }),
  password: z
    .string()
    .min(5, { error: 'Password must be at least 8 characters' })
    .max(128, {
      message: 'Password must be less than 128 characters',
    }),
});

export type LoginInput = z.infer<typeof loginInputSchema>;

const loginWithEmailAndPassword = (
  data: LoginInput,
): Promise<AuthResponse> => {
  return api.post(authPaths.login, data);
};

// Register user
export const registerInputSchema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z
    .email({ error: 'Invalid email address' })
    .min(1, { error: 'Email is required' }),
  password: z
    .string()
    .min(5, { error: 'Password must be at least 8 characters' })
    .max(128, {
      error: 'Password must be less than 128 characters',
    }),
});

export type RegisterInput = z.infer<typeof registerInputSchema>;

const registerWithEmailAndPassword = (
  data: RegisterInput,
): Promise<AuthResponse> => {
  return api.post(authPaths.register, data);
};

// Get user
const getUser = async (): Promise<User> => {
  const response = await api.get(authPaths.me);
  return response.data;
};

// Logout user
const logout = (): Promise<void> => {
  return api.post(authPaths.logout);
};

const authConfig = {
  userFn: getUser,
  loginFn: async (data: LoginInput) => {
    const response = await loginWithEmailAndPassword(data);
    return response.user;
  },
  registerFn: async (data: RegisterInput) => {
    const response = await registerWithEmailAndPassword(data);
    return response.user;
  },
  logoutFn: logout,
};

export const {
  useUser,
  useLogin,
  useLogout,
  useRegister,
  AuthLoader,
} = configureAuth<
  User,
  AxiosError<ApiErrorResponse>,
  LoginInput,
  RegisterInput
>(authConfig);

export const ProtectedRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = useUser();
  const location = useLocation();

  if (!user.data) {
    return (
      <Navigate
        to={paths.auth.login.getHref(
          `${location.pathname}${location.search}`,
        )}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};
