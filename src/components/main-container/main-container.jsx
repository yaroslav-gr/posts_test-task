import React from 'react';

const MainContainer = ({children}) => {
  return (
    <React.Fragment>
      <main className='container sm:mx-auto md:mx-auto my-4 box-border'>
        {children}
      </main>
    </React.Fragment>
  );
};

export default MainContainer;
