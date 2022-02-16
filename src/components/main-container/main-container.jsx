import React from 'react';

const MainContainer = ({children}) => {
  return (
    <React.Fragment>
      <main className='container md:mx-auto my-4'>
        {children}
      </main>
    </React.Fragment>
  );
};

export default MainContainer;
