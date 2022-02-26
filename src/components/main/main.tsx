import React from 'react';
import NavMenu from '../nav-menu/nav-menu';
import MainContainer from '../main-container/main-container';
import Header from '../header/header';

const MainPage = (): JSX.Element => {
  return (
    <React.Fragment>
      <MainContainer>
        <NavMenu/>
        <Header title={`Page description:`}/>
        <div className='grid grid-cols-2 grid-rows-1 gap-4'>
          <p className='text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam faucibus purus in massa. Convallis aenean et tortor at. Turpis egestas maecenas pharetra convallis posuere. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Odio morbi quis commodo odio. Mattis enim ut tellus elementum sagittis vitae et leo. Volutpat commodo sed egestas egestas. Adipiscing elit pellentesque habitant morbi. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Turpis massa tincidunt dui ut ornare. Ut diam quam nulla porttitor massa id neque. Urna condimentum mattis pellentesque id nibh. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Sit amet commodo nulla facilisi nullam vehicula.
          </p>
          <p className='text-lg'>
            Elit pellentesque habitant morbi tristique senectus et netus et. Id nibh tortor id aliquet lectus proin. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Sagittis eu volutpat odio facilisis mauris sit amet. Felis eget velit aliquet sagittis id consectetur purus ut. Aliquam sem et tortor consequat id porta nibh venenatis cras. Nisi quis eleifend quam adipiscing vitae proin sagittis. Cursus mattis molestie a iaculis at erat. Enim nec dui nunc mattis enim ut. Pretium quam vulputate dignissim suspendisse. Eget aliquet nibh praesent tristique. Ac tortor dignissim convallis aenean et tortor at. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Laoreet suspendisse interdum consectetur libero id faucibus. Nisi porta lorem mollis aliquam ut porttitor.
          </p>
        </div>
      </MainContainer>
    </React.Fragment>
  );
};

export default MainPage;
