import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setCurrentPostsList } from '../../store/actions';
import { State } from '../../store/types';
import PaginationItem from './pagination-item';

const Pagination = (): JSX.Element => {
  const pages = useSelector((state: State) => state.pagesCount);
  const currentPage = useSelector((state: State) => state.currentPage);
  const dispatch = useDispatch();

  const onNextPageHandler = () => {
    if ((currentPage + 1) > pages) {
      return;
    }

    dispatch(setCurrentPage(currentPage + 1));
    dispatch(setCurrentPostsList());
  };

  const onPrevPageHandler = () => {
    if ((currentPage - 1) < 1) {
      return;
    }

    dispatch(setCurrentPage(currentPage - 1));
    dispatch(setCurrentPostsList());
  };

  return (
    <React.Fragment>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 my-10 self-center">
        <div className="self-center sm:flex-1 sm:flex sm:items-center sm:justify-center">
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onClick={onPrevPageHandler}>
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
              </a>
              {Array(pages).fill(1).map((item, index) => <PaginationItem pageNumber={index + 1} key={index + item}/>)}

              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onClick={onNextPageHandler}>
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>  
  );
};

export default Pagination;
