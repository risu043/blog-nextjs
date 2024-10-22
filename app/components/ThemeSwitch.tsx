'use client';

import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { useTheme } from 'next-themes';
import { LuSunDim } from 'react-icons/lu';
import { FiMoon } from 'react-icons/fi';

interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = (props) => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked ? 'dark' : 'light');
  };

  if (!mounted) {
    return null;
  }

  return (
    <label
      className={`relative cursor-pointer flex items-center w-fit mx-auto ${props.className}`}
    >
      <LuSunDim
        size={25}
        className={`sun absolute text-yellow-400 ${
          theme === 'dark' ? 'hidden' : ''
        }`}
      />
      <FiMoon
        size={22}
        className={`moon absolute text-violet-400 ${
          theme === 'dark' ? '' : 'hidden'
        }`}
      />
      <input
        type="checkbox"
        onChange={handleToggle}
        className="checkbox hover:shadow-md"
        checked={theme === 'dark'}
      />
    </label>
  );
};
