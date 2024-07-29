'use client';

import { InputHTMLAttributes, forwardRef } from 'react';
export default forwardRef<
  HTMLTextAreaElement,
  InputHTMLAttributes<HTMLTextAreaElement>
>(function TextArea(
  {
    type = 'text',
    className = '',
    ...props
  }: InputHTMLAttributes<HTMLTextAreaElement>,
  ref
) {
  return (
    <textarea
      {...props}
      className={
        'w-full h-40 p-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
        className
      }
      ref={ref}
    ></textarea>
  );
});
