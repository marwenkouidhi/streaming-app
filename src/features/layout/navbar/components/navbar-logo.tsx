import Link from 'next/link';
import React from 'react';

const NavbarLogo = () => {
  return (
    <Link
      href="/"
      aria-label="Mabol Live - Home"
      className="flex items-center text-primary"
    >
      <h1 className="text-xl font-bold">Mabol Live</h1>
    </Link>
  );
};

export default NavbarLogo;
