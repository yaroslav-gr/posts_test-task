import React from 'react';
import { Link } from 'react-router-dom';

const NavMenuItem = ({name, url}) => {
  return (
    <React.Fragment>
      <Link to={url} className="rounded-lg px-3 py-2 text-slate-500 leading-[3rem] text-3xl hover:bg-slate-100 hover:text-slate-900">
        {name}
      </Link>
    </React.Fragment>
  );
};

export default NavMenuItem;
