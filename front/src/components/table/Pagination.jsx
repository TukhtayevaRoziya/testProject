import React, { useState } from 'react'
import styles from './Table.module.css'

const Pagination = ({ data, setCurrentPage, currentPage, itemsPerPage, pages, handleClick }) => {

  const renderPagesNumber = pages.map((number) => {
    console.log(number);
    return (
      <li
        key={number}
        id={number}
        onClick={handleClick}
        className={currentPage === number ? styles.active : ''}
      >
        {number}
      </li>
    )
  })
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
  
    pages.push(i)
  }
  console.log(Math.ceil(data.length / itemsPerPage));


  const handlePrevClick = () => {
    setCurrentPage(currentPage !== 1 ? currentPage - 1 : currentPage)
  }
  const handleNextClick = () => {
    setCurrentPage(
      currentPage !== Math.ceil(data.length / itemsPerPage)
        ? currentPage + 1
        : currentPage,
    )
  }
  return (
    <ul className={styles.pagination}>
      <li>
        <button onClick={handlePrevClick}> Prev </button>
      </li>
      {renderPagesNumber}
      <li>
        <button onClick={handleNextClick}> Next </button>
      </li>
    </ul>
  )
}

export default Pagination
