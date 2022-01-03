import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRepo } from '../../reducer/gitSlice'
import InputForm from '../common/InputForm'
import NoDataFound from '../common/NoDataFound'
import Paginate from '../common/Pagination'
import RepoDetail from './RepoDetail'

const GitRepo = () => {
  const [state, setState] = useState({
    handle: '',
  })
  const disptach = useDispatch()
  const gitState = useSelector((state) => state.git)

  const onSubmit = (data) => {
    const { handle } = data
    disptach(fetchRepo({ handle }))
    setState({
      handle: handle,
    })
  }

  const handlePageChange = (page) => {
    disptach(fetchRepo({ handle: state.handle, page }))
  }

  return (
    <>
      <InputForm onSubmit={onSubmit} fieldName="handle" />
      {gitState.repoStatus === 'loading' && (
        <div data-testid="loading-test-id">loading....</div>
      )}
      {gitState.repoStatus === 'succeeded' && gitState.repos.length > 0 && (
        <div data-testid="repo-wrapper-test-id">
          {gitState.repos.map((repo, index) => {
            return <RepoDetail key={index} repo={repo} />
          })}
          <Paginate
            paginate={gitState.paginate}
            handlePageChange={handlePageChange}
          />
        </div>
      )}
      {gitState.repoStatus === 'failed' && <NoDataFound />}
    </>
  )
}

export default GitRepo
