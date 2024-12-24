import Link from 'next/link';
import NavbarUtilities from './components/navbar-utilities';
import NavbarMenu from './components/navbar-menu';
import NavbarLogo from './components/navbar-logo';

const Navbar = async () => {
  return (
    <nav className="flex justify-between overflow-hidden border-y px-5">
      <NavbarLogo />
      <NavbarMenu />
      <NavbarUtilities />
    </nav>
  );
};

export default Navbar;
