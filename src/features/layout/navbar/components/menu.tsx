'use client';

import Link from 'next/link';
import { navbarConfig } from '../navbar.config';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const pathname = usePathname();

  return (
    <ul className="flex space-x-10" role="menu">
      {Array.isArray(navbarConfig) && navbarConfig.length > 0 ? (
        navbarConfig.map((item) => (
          <li key={item.path} className="relative py-5" role="menuitem">
            <Link
              href={item.path}
              className={`font-bold transition-colors hover:text-primary focus:outline-none ${
                pathname === item.path ? 'text-secondary' : ''
              }`}
            >
              {item.label}
            </Link>
            {pathname === item.path && (
              <div className="absolute -top-0 left-1/2 h-3 w-6 -translate-x-1/2 rounded-b-full bg-secondary" />
            )}
          </li>
        ))
      ) : (
        <li className="navbar-item text-muted-foreground" role="menuitem">
          No menu items available
        </li>
      )}
    </ul>
  );
};

export default Menu;
