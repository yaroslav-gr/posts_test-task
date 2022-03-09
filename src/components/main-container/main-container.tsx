import React from 'react';
import { MainContainerProps } from './types';

const MainContainer = ({children}: MainContainerProps) => {
  return (
    <React.Fragment>
      <main className='container flex flex-wrap flex-col min-h-screen sm:mx-auto md:mx-auto py-4 box-border'>
        {children}
      </main>
    </React.Fragment>
  );
};

export default MainContainer;
