'use client';

import type { FC } from 'react';
import { useTheme } from 'next-themes';
import { LuSunDim } from 'react-icons/lu';
import { FiMoon } from 'react-icons/fi';

interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = (props) => {
  const { setTheme, theme } = useTheme();

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className={`checkbox-wrapper ${props.className}`}>
      <label className="flex items-center gap-1 w-fit mx-auto cursor-pointer">
        <LuSunDim size={25} className="text-neutral-300" />
        <input
          type="checkbox"
          onChange={handleToggle}
          className="checkbox hover:shadow-md"
          checked={theme === 'dark'}
        />
        <FiMoon size={20} className="text-neutral-300" />
      </label>
    </div>
  );
};
