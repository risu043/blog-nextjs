'use client';

import { useState } from 'react';
import type { FC } from 'react';
import { useTheme } from 'next-themes';
import { LuSunDim } from 'react-icons/lu';
import { FiMoon } from 'react-icons/fi';

interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = (props) => {
  const { setTheme, theme } = useTheme();
  const [checked, setChecked] = useState(false);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setChecked(true);
      setTheme('dark');
    } else {
      setChecked(false);
      setTheme('light');
    }
  };

  return (
    <label
      className={`relative cursor-pointer flex items-center w-fit mx-auto ${props.className}`}
    >
      <LuSunDim
        size={25}
        className={`sun absolute text-yellow-400 ${checked ? 'hidden' : ''}`}
      />
      <FiMoon
        size={22}
        className={`moon absolute text-violet-400 ${checked ? '' : 'hidden'}`}
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
