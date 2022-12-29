/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { PaginationProps } from '../interface';
import style from './index.module.scss';

const Pagination: React.FC<PaginationProps> = ({
  nPages,
  currentPage,
  setCurrentPage,
}): JSX.Element => {
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(1);
  };
  return (
    <nav className={style.pagination__container}>
      <ul className={style.pagination}>
        <li className={style.pagination__item} onClick={prevPage}>
          <a href="#" className={style.pagination__link}>
            <span className={style.pagination__text}>First</span>
          </a>
        </li>
        {nPages > 1 ? (
          Array.from(Array(nPages).keys()).map((page) => {
            return (
              <li
                className={`${style.pagination__item} ${
                  currentPage === page + 1 ? style.active : ''
                }`}
                key={page}
                onClick={() => setCurrentPage(page + 1)}
              >
                <a href="#" className={style.pagination__link}>
                  <span className={style.pagination__text}>{page + 1}</span>
                </a>
              </li>
            );
          })
        ) : (
          <li className={`${style.pagination__item} ${style.active}`}>
            <a href="#" className={style.pagination__link}>
              <span className={style.pagination__text}>1</span>
            </a>
          </li>
        )}
        <li className={style.pagination__item} onClick={nextPage}>
          <a href="#" className={style.pagination__link}>
            <span className={style.pagination__text}>Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
