import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='flex w-full items-center justify-between py-4 px-3 bg-blue'>
      <div className=''>
        <Image
          src="/isotipo.svg"
          alt="Logo"
          width={111}
          height={34}
          priority
        />
      </div>
      <div className=''>
        <p className='text-white text-xs'>
          &copy; 2023 Progrez All right reserved
        </p>
      </div>
      <div className=''>
        <Image
          src="/private-ceo.svg"
          alt="private ceo"
          width={111}
          height={34}
          priority
        />
      </div>
    </footer>
  );
}

export default Footer;