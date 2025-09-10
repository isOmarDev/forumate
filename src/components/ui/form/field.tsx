import React, { type PropsWithChildren } from 'react';
import type { FieldError } from 'react-hook-form';

import { Error } from './error';
import { type InputProps } from './input';
import { Label } from './label';

type FieldProps = PropsWithChildren<{
  id: string;
  label: string;
  error?: FieldError | undefined;
}>;

export const Field = ({ id, label, error, children }: FieldProps) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>

      {React.isValidElement(children)
        ? React.cloneElement(
            children as React.ReactElement<InputProps>,
            {
              id,
            },
          )
        : children}

      <Error message={error?.message} />
    </div>
  );
};
