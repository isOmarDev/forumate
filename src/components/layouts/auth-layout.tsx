import { Bubbles } from 'lucide-react';
import type { PropsWithChildren } from 'react';
import { Link } from 'react-router';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/cn';

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
        <div className="w-full max-w-sm">
          <Link
            to="/"
            className={cn(
              'mb-6 flex items-center justify-center gap-2',
              'font-medium',
            )}
          >
            <div
              className={cn(
                'flex size-10 items-center justify-center',
                'rounded-lg bg-primary text-primary-foreground',
              )}
            >
              <Bubbles />
            </div>
          </Link>

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
