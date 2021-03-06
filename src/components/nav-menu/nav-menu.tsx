import React from 'react';
import NavMenuItem from './nav-menu-item';
import { navList } from '../../const/const';
import Logo from './logo';

const NavMenu = (): JSX.Element => {
  return (
    <React.Fragment>
      <nav className="flex flex-wrap fl justify-between space-x-6 mb-3">
        <Logo/>
        <div>
          {navList.map(item => <NavMenuItem key={item.name} url={item.url} name={item.name}/>)}
        </div>
      </nav>
    </React.Fragment>
  );
}
export default NavMenu;
