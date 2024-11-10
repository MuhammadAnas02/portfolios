import Link from 'next/link';
import React from 'react';


const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link href={'#Home'}>Home</Link>
      <Link href={'#Skills'}>Skills</Link>
      <Link href={'#About'}>About us</Link>
      <Link href={'#Contact'}>Contact us</Link>
    </div>
  );
}

export default Navbar;
