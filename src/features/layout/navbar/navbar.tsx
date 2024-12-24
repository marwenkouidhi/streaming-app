import Link from 'next/link';
import NavbarUtilities from './components/navbar-utilities';
import NavbarMenu from './components/navbar-menu';
import NavbarLogo from './components/navbar-logo';

const Navbar = async () => {
  return (
    <nav className="overflow-hidden border-y px-5">
      <div className="mx-auto flex max-w-screen-2xl justify-between">
        <NavbarLogo />
        <NavbarMenu />
        <NavbarUtilities />
      </div>
    </nav>
  );
};

export default Navbar;
