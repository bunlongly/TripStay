import React from 'react';
import Logo from './Logo';
import NavSearch from './NavSearch';
import LinksDropdown from './LinkDropdown';
import DarkMode from './DarkMode';

function Navbar() {
    return (
      <nav className='border-b'>
        <div className='container flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
          <Logo />
          <NavSearch />
          <div className='flex gap-4 items-center '>
            <DarkMode />
            <LinksDropdown />
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;
