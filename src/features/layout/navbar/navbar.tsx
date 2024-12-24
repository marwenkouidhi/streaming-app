import Link from 'next/link';
import Search from './components/search';
import Notification from './components/notification';
import ModeToggle from './components/mode-toggle';
import Menu from './components/menu';

const Navbar = async () => {
  return (
    <nav className="flex justify-between overflow-hidden border-y px-5">
      <Link
        href="/"
        aria-label="Mabol Live - Home"
        className="flex items-center text-primary"
      >
        <h1 className="text-xl font-bold">Mabol Live</h1>
      </Link>
      <Menu />
      <div className="flex items-center space-x-3">
        <Search />
        <Notification />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
