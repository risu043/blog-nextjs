import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';

const Profile: React.FC = () => {
  return (
    <div className="card-body p-4 mb-8 rounded-xl h-fit">
      <h2 className="font-kiwi text-xl text-center mb-4">Profile</h2>
      <Image
        src="/risu.png"
        alt="Example Image"
        width={100}
        height={100}
        priority={true}
        className="w-20 h-20 object-cover rounded-full mx-auto mb-1"
      />
      <p className="text-center mb-2">りす</p>
      <p className="text-sm mb-4">りすさんの学習記録。</p>
      <div className="border-dotted border-t-2 border-neutral-400 pt-4 flex justify-center gap-4">
        <Link href="https://github.com/risu043">
          <FaGithub size={25} className="hover:animate-pudding" />
        </Link>
        <Link href="https://x.com/risu043">
          <FaXTwitter size={25} className="hover:animate-pudding" />
        </Link>
        <Link href="/blogs/mail">
          <MdMail size={30} className="hover:animate-pudding" />
        </Link>
      </div>
    </div>
  );
};

export default Profile;
