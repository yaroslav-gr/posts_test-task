import React from 'react';

const Header = ({title}) => {
  return (
    <React.Fragment>
      <h1 className="text-3xl font-nornal text-slate-700 mb-4">{title}</h1>
    </React.Fragment>
  );
};

export default Header;
