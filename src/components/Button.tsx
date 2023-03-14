import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return(
    <Comp 
    className={clsx(
      'py-4 px-3 bg-white-90 rounded font-semibold shadow-neo text-black text-sm w-full transition-shadow hover:shadow-neo-flat focus:ring-2 ring-blue-200',
    )}
    >
      {children}
    </Comp>
  )
}