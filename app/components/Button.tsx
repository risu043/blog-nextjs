import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean;
}

export default function Button({
  className = '',
  isSubmitting = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`text-xl ${
        isSubmitting
          ? 'bg-rose-400'
          : 'text-rose-300 hover:text-white hover:bg-rose-300'
      } transition duration-700 border border-rose-300 rounded-full h-16 md:w-60 w-full block mx-auto`}
    >
      {children}
    </button>
  );
}
