import Link from 'next/link';
import Image from 'next/image';

import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Profile: React.FC = () => {
  return (
    <div className="bg-white p-4 mb-8 rounded-xl h-fit">
      <h2 className="font-kiwi text-xl text-center mb-4">Profile</h2>
      <Image
        src="/risu.jpg"
        alt="Example Image"
        width={500}
        height={300}
        className="w-20 h-20 object-cover rounded-full mx-auto mb-1"
      />
      <p className="text-center mb-2">りす</p>
      <p className="text-sm mb-4">learning programming.</p>
      <div className="border-dotted border-t-2 border-neutral-400 pt-4 flex justify-center gap-4">
        <Link href="https://github.com/risu043">
          <FaGithub size={20} />
        </Link>
        <Link href="https://x.com/risu043">
          <FaXTwitter size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Profile;
