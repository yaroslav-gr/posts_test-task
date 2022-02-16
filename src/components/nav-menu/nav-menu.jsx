import React from 'react';
import NavMenuItem from './nav-menu-item';
import { navList } from '../../const/const';

const NavMenu = () => {
  return (
    <React.Fragment>
      <nav className="flex sm:justify-center space-x-4">
        {navList.map(item => <NavMenuItem key={item.name} url={item.url} name={item.name}/>)}
      </nav>
    </React.Fragment>
  );
}
export default NavMenu;
