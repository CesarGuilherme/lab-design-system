import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "py-3 px-4 bg-gray-10 rounded font-semibold shadow-neo text-blue-200 text-sm w-full hover:shadow-inner-neo hover:-translate-y-[1px] transition ease-in-out duration-100 outline-none focus:ring-2 ring-blue-200",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
