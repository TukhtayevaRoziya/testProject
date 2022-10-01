import React, { useState } from 'react'

import styles from './Table.module.css'

const Table = () => {
  const data = [
    { id:23, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 1, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 2, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 3, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 4, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 5, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 6, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 7, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 8, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 9, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 10, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 11, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 12, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 13, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 14, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 15, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 16, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 17, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 18, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 19, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 20, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 21, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' },
    { id: 22, date: '01.01.2000', name: 'BMW', amount: 23, distance: '32423' }
  ]

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const pages = []
  
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const handleClick = (e) =>{
    setCurrentPage(Number(e.target.id))
    console.log(currentPage, Number(e.target.id));
  }
  const handlePrevClick = () =>{
    setCurrentPage(currentPage !== 1 ? currentPage - 1 : currentPage)
  }
  const handleNextClick = () =>{
    setCurrentPage(currentPage !== Math.ceil(data.length / itemsPerPage) ? currentPage + 1 : currentPage)

  }

  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i)
  }

  const renderPagesNumber = pages.map((number) => {
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

  const dataMap = currentItems.map((d) => (
    <tr className={styles.table__td_wrap} key={d.id}>
      <td>{d.id}</td>
      <td>{d.date}</td>
      <td>{d.name}</td>
      <td>{d.amount}</td>
      <td>{d.distance}</td>
    </tr>
  ))

  return (
    <div>
      <table border={'red'} className={styles.table}>
        <thead>
          <tr>
            <th>N0</th>
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>{dataMap}</tbody>
      </table>
      <ul className={styles.pagination}>
        <li>
          <button onClick={handlePrevClick}> Prev </button>
        </li>
        {renderPagesNumber}
        <li>
          <button  onClick={handleNextClick}> Next </button>
        </li>
      </ul>
    </div>
  )
}

export default Table
