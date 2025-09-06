import type { PropsWithChildren } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/cn';

import { Logo } from '../ui/logo';

type AuthLayoutProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export const AuthLayout = ({
  children,
  title,
  description,
}: AuthLayoutProps) => {
  return (
    <main>
      <section
        className={cn(
          'mx-auto flex min-h-svh items-center justify-center p-5',
          'bg-muted',
        )}
      >
        <div className="w-full max-w-sm text-center">
          <div className="mb-6 flex justify-center">
            <Logo />
          </div>

          <Card>
            <CardHeader className="text-center">
              <CardTitle>
                <h1 className="text-xl">{title}</h1>
              </CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>

            <CardContent>{children}</CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};
