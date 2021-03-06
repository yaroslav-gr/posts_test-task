import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';

const Logo = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className='self-start'>
        <Link to={AppRoute.ROOT} className='inline-block'>
          <img
            className='w-12 h-12'
            src="https://img.icons8.com/color-glass/48/000000/ok.png"/>
        </Link>
      </div>
    </React.Fragment>
  );
};
 export default Logo;
