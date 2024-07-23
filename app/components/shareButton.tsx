import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';

interface ShareButtonProps {
  url: string;
  text?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url, text }) => {
  const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}${text ? `&text=${encodeURIComponent(text)}` : ''}`;

  return (
    <div className="">
      <a
        href={shareUrl}
        className="bg-neutral-800 flex items-center gap-1 text-white hover:text-white hover:opacity-[0.9] px-4 py-2 w-fit rounded-full mt-4"
        data-show-count="false"
        data-size="large"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter />
        share
      </a>
    </div>
  );
};

export default ShareButton;
