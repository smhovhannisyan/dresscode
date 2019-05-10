import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { TableContext } from '.';

import { Icon } from '../Icon';

import styles from './table.css';

const ELIPSIS = '...';

export class TablePagination extends React.Component {
  static contextType = TableContext;

  createRange = (start, end) => {
    const range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };

  getPageRange = (page, pageCount, total) => (
    `${(page - 1) * pageCount + 1} - ${page * pageCount > total ? total : (page * pageCount)}`
  );

  renderPageRange = (page, pageCount, total) => (
    <div className={styles.tablePageRange}>
      {`${this.getPageRange(page, pageCount, total)} / ${total}`}
    </div>
  );

  renderPages = () => {
    const {
      page,
      pageCount,
      total,
      pageSibilingCount,
      onPageClick,
    } = this.props;

    const lastPage = Math.ceil(total / pageCount);

    let mainPageNumbers = [];
    let firstPageNumbers = [1];
    let lastPageNumbers = [lastPage];
    if (lastPage < 5 + 2 * pageSibilingCount) {
      firstPageNumbers = [];
      mainPageNumbers = this.createRange(1, lastPage);
      lastPageNumbers = [];
    } else if (page < 4) {
      firstPageNumbers = this.createRange(1, 5);
      mainPageNumbers = [ELIPSIS];
    } else if (page > lastPage - (pageSibilingCount * 2 + 1)) {
      mainPageNumbers = [ELIPSIS];
      lastPageNumbers = this.createRange(lastPage - 4, lastPage);
    } else {
      mainPageNumbers = [ELIPSIS, ...this.createRange(page - 1, page + 1), ELIPSIS];
    }

    const pageNumbers = [
      ...firstPageNumbers,
      ...mainPageNumbers,
      ...lastPageNumbers,
    ];

    return (
      <div className={styles.tablePages}>
        <div className={styles.tablePageNumber}>
          <Icon
            name='arrow-left'
            onClick={page !== 1 ? () => onPageClick(page - 1) : null}
          />
        </div>
        {pageNumbers.map((pageNumber, index) => {
          const selectedPageClasses = classNames({
            [styles.tablePageNumber]: true,
            [styles.tablePageNumberSelected]: pageNumber === page,
            [styles.tablePageNumberClickable]: pageNumber !== ELIPSIS,
          });

          return (
            <div
              className={selectedPageClasses}
              onClick={pageNumber !== ELIPSIS ? () => onPageClick(pageNumber) : null}
              role='presentation'
              key={index}
            >
              {pageNumber}
            </div>
          );
        })}
        <div className={styles.tablePageNumber}>
          <Icon
            name='arrow-right'
            onClick={page !== lastPage ? () => onPageClick(page + 1) : null}
          />
        </div>
      </div>
    );
  };

  render() {
    const {
      page,
      pageCount,
      total,
      pageSibilingCount,
      onPageClick,
      className,
      ...props
    } = this.props;

    const tablePaginationClasses = classNames({
      [styles.tablePagination]: true,
    });

    return (
      <div
        className={tablePaginationClasses}
        {...props}
      >
        {this.renderPageRange(page, pageCount, total)}
        {this.renderPages()}
      </div>
    );
  }
}

TablePagination.propTypes = {
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
  pageCount: PropTypes.number,
  pageSibilingCount: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

TablePagination.defaultProps = {
  pageCount: 10,
  pageSibilingCount: 1,
  className: '',
  style: undefined,
};
