import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setCurrentPostsList } from '../../store/actions';
import { State } from '../../store/types';
import { PaginationItemProps } from './types';

const PaginationItem = ({pageNumber}: PaginationItemProps): JSX.Element => {
  const currentPageNumber = useSelector((state: State) => state.currentPage);
  const dispatch = useDispatch();

  const paginationHandler = () => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(setCurrentPostsList());
  };

  return (
    <React.Fragment>
      <a
        href="#"
        onClick={paginationHandler}
        className={currentPageNumber === pageNumber ?
                  `hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium active-page` :
                  `bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium`}> 
        {pageNumber} 
    </a>
    </React.Fragment>
  );
};

export default PaginationItem;
