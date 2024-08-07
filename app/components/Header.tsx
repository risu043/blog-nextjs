'use client';

import { FC, useState, useEffect } from 'react';
import { ToggleButton } from './ToggleButton';
import { Navigation } from './Navigation';

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const toggleFunction = () => {
    setOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  return (
    <header className="header">
      <ToggleButton
        open={open}
        controls="navigation"
        label="メニューを開きます"
        onClick={toggleFunction}
      />
      <Navigation
        id="navigation"
        open={open}
        controls="navigation"
        onClick={toggleFunction}
      />
    </header>
  );
};
export default Header;
