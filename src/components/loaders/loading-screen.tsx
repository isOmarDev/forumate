import { LogoIcon } from '../ui/logo';

export const LoadingScreen = () => (
  <div className="flex h-screen w-screen items-center justify-center">
    <LogoIcon className="animate-bounce" size="xl" variant="ghost" />
  </div>
);
