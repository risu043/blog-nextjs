'use client';

import { FC, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import Link from 'next/link';
import { ThemeSwitch } from './ThemeSwitch';
import SearchField from './SearchField';
import { Category } from '@/libs/client';
import { HeaderNav } from './HeaderNav';

interface HeaderProps {
  categories: Category[];
}

const Header: FC<HeaderProps> = ({ categories }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const hideSearch = () => {
    setIsSearchVisible(false);
  };

  return (
    <>
      <header>
        <div className="grid grid-cols-[50px_1fr_50px] items-center mb-8">
          <button onClick={toggleSearch}>
            {isSearchVisible ? (
              <RxCross2 size={25} />
            ) : (
              <FaMagnifyingGlass size={25} className="hover:animate-pudding" />
            )}
          </button>

          <Link href="/">
            <h1 className="font-kiwi text-2xl text-center">risuLog</h1>
          </Link>
          <div>
            <ThemeSwitch />
          </div>
        </div>
        {isSearchVisible && (
          <div className="card-body p-4 mb-8 rounded-xl h-fit">
            <SearchField onSearchSubmit={hideSearch} />
            <HeaderNav categories={categories} onItemClick={hideSearch} />
          </div>
        )}
      </header>
    </>
  );
};
export default Header;
