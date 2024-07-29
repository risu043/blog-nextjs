'use client';

import { InputHTMLAttributes, forwardRef } from 'react';

export default forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function TextInput(
  {
    type = '',
    className = '',
    ...props
  }: InputHTMLAttributes<HTMLInputElement>,
  ref
) {
  return (
    <input
      {...props}
      type={type}
      className={
        'w-full p-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
        className
      }
      ref={ref}
    />
  );
});
