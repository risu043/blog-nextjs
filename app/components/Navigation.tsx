import { FC, MouseEventHandler } from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';

type Props = {
  open: boolean;
  id: string;
  controls: string;
  onClick: MouseEventHandler;
};

export const Navigation: FC<Props> = ({ open, id, controls, onClick }) => {
  return (
    <nav id={id} aria-hidden={!open} className="navigation card-body">
      <div className="flex flex-col gap-4 mb-8 text-xl">
        <Link
          onClick={onClick}
          aria-controls={controls}
          aria-expanded={open}
          href="/blogs/categories/vtz2cpzbo4q"
        >
          update
        </Link>
        <Link
          onClick={onClick}
          aria-controls={controls}
          aria-expanded={open}
          href="/blogs/categories/knng1wh8x"
        >
          react
        </Link>
        <Link
          onClick={onClick}
          aria-controls={controls}
          aria-expanded={open}
          href="/blogs/categories/uuil8fvf5h"
        >
          laravel
        </Link>
      </div>
      <div className="border-dotted border-t-4 border-neutral-400 pt-8 flex justify-center gap-8">
        <Link href="https://github.com/risu043">
          <FaGithub size={30} />
        </Link>
        <Link href="https://x.com/risu043">
          <FaXTwitter size={30} />
        </Link>
        <Link
          onClick={onClick}
          aria-controls={controls}
          aria-expanded={open}
          href="/blogs/mail"
        >
          <MdMail size={35} />
        </Link>
      </div>
    </nav>
  );
};
