import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className='header'>
      <Link href='/' className='md:flex-1'>
        <Image
          src='/assets/icons/logo.svg'
          alt='Logo with name'
          width={120}
          height={32}
          className='hidden md:block'
        />
        <Image
          src='/assets/icons/logo.svg'
          alt='Logo without name'
          width={32}
          height={32}
          className='mr-2 md:block'
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
