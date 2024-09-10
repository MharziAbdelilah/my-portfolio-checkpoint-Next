import Image from 'next/image';
import profilePic from '../public/profile-pic.jpg'; 

export default function Home() {
  return (
    <div>
      <Image src={profilePic} alt="Profile Picture" width={150} height={150} />
    </div>
  );
}
