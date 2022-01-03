import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../../reducer/gitSlice'
import InputForm from '../common/InputForm'
import NoDataFound from '../common/NoDataFound'
import UserDetail from './UserDetail'

const GitUser = () => {
  const disptach = useDispatch()
  const gitState = useSelector((state) => state.git)

  const onSubmit = (data) => {
    disptach(fetchUser(data.username))
  }

  return (
    <>
      <InputForm onSubmit={onSubmit} fieldName="username" />
      {gitState.userStatus === 'loading' && (
        <div data-testid="loading-test-id">loading....</div>
      )}
      {gitState.userStatus === 'succeeded' && (
        <UserDetail user={gitState.user} />
      )}
      {gitState.userStatus === 'failed' && <NoDataFound />}
    </>
  )
}

export default GitUser
