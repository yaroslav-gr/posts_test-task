import React from 'react';
import { MainContainerProps } from './types';

const MainContainer = ({children}: MainContainerProps) => {
  return (
    <React.Fragment>
      <main className='container sm:mx-auto md:mx-auto my-4 box-border'>
        {children}
      </main>
    </React.Fragment>
  );
};

export default MainContainer;
