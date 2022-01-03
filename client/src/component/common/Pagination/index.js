import React from 'react'
import { Pagination } from 'react-bootstrap'

const Paginate = (props) => {
  const { paginate, handlePageChange } = props
  const { page, totalPages } = paginate

  return (
    <div>
      <span>Total Pages : {totalPages}</span>
      <Pagination>
        <Pagination.Prev
          disabled={page === 1 ? true : false}
          onClick={() => handlePageChange(page - 1)}
        />
        <Pagination.Item key={page} active={page}>
          {page}
        </Pagination.Item>
        <Pagination.Next
          disabled={page < totalPages ? false : true}
          onClick={() => handlePageChange(page + 1)}
        />
      </Pagination>
    </div>
  )
}

export default Paginate
