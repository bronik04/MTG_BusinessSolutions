import React from 'react';
import { PaginationProps } from '../../utils/types';

class Pagination extends React.Component<PaginationProps> {
  render() {
    const { pageNumbers, currentPage, onPageChange } = this.props;
    return (
      <div className="pagination">
        {pageNumbers.map(page => (
          <button
            key={page}
            className="pagination__btn"
            onClick={() => onPageChange(page)}
            style={{ fontWeight: page === currentPage ? 'bold' : 'normal' }}
          >
            {page}
          </button>
        ))}
      </div>
    );
  }
}

export default Pagination;
