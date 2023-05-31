import Image from 'next/image'
import Navbar from './navbar'

const Header = () => {
  return (
    <header className="font-sans antialiased">
        <div className='flex w-full items-center justify-between py-4 px-3 bg-blue'>
          <div className=''>
            <Image
              src="/tuprutec.svg"
              alt="Logo"
              width={159}
              height={34}
              priority
            />
          </div>
        </div>
        <Navbar />
      </header>
  );
}

export default Header;