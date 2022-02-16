import React from 'react';
import NavMenuItem from './nav-menu-item';
import { navList } from '../../const/const';

const NavMenu = () => {
  return (
    <React.Fragment>
      <nav className="flex flex-wrap fl sm:justify-end space-x-6 mb-3">
        <picture className='w-full'>
          <img 
          className='w-12 h-12'
          src="https://img.icons8.com/color-glass/48/000000/ok.png"/>
        </picture>
      
        {navList.map(item => <NavMenuItem key={item.name} url={item.url} name={item.name}/>)}
      </nav>
    </React.Fragment>
  );
}
export default NavMenu;
