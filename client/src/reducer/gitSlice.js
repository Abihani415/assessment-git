import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUserRoute, getRepoRoute } from '../apiService/routeHelper'
import client from '../apiService'

const initialState = {
  user: {},
  repos: [],
  userErrors: false,
  repoErrors: false,
  paginate: {
    limit: 10,
    page: 1,
    totalPages: 1,
  },
}

export const fetchUser = createAsyncThunk('git/fetchUser', async (username) => {
  const route = getUserRoute(username)
  const response = await client(route)
  return response.data
})

export const fetchRepo = createAsyncThunk('git/fetchRepo', async (data) => {
  const { handle } = data
  const page = data.page ? data.page : 1
  const route = getRepoRoute(handle, page)
  const response = await client(route)
  return response.data
})

export const gitSlice = createSlice({
  name: 'git',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.userStatus = 'loading'
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.userStatus = 'succeeded'
      state.user = action.payload.user
    },
    [fetchUser.rejected]: (state, action) => {
      state.userStatus = 'failed'
      state.userErrors = action.payload
    },

    [fetchRepo.pending]: (state) => {
      state.repoStatus = 'loading'
    },
    [fetchRepo.fulfilled]: (state, action) => {
      state.repoStatus = 'succeeded'
      const { repos, ...paginate } = action.payload
      state.repos = repos
      paginate.page = parseInt(paginate.page)
      state.paginate = paginate
    },
    [fetchRepo.rejected]: (state, action) => {
      state.repoStatus = 'failed'
      state.repoErrors = action.payload
    },
  },
})

export default gitSlice.reducer
