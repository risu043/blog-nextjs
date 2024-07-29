import { ButtonHTMLAttributes } from 'react';

export default function Button({
  className = '',
  disabled,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        `text-lg px-8 py-4 block w-full md:w-fit md:mx-auto bg-neutral-300 border border-transparent rounded-full font-semibold text-white uppercase tracking-widest hover:bg-rose-300 focus:bg-rose-300 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
          disabled && 'opacity-25'
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
