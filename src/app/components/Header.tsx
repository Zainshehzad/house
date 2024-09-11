import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex justify-evenly bg-slate-600 h-16 p-4 hover:bg-slate-400 transition'>
      <Link className='hover:text-slate-800' href="/">Home</Link>
      <Link className='hover:text-slate-800' href="/About">About</Link>
      <Link className='hover:text-slate-800' href="/Header">Header</Link>
    </div>
  );
}

export default Header;