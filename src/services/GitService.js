import { GIT_BASE_URL } from '../constants'
import getFetch from './FetchService'

const fetchGitUser = async (username) => {
  const data = getFetch(`${GIT_BASE_URL}/users/${username}`)
  return data
}

const fetchGitRepos = async (handle, page, limit) => {
  const data = getFetch(
    `${GIT_BASE_URL}/users/${handle}/repos?page=${page}&per_page=${limit}`
  )
  return data
}

export { fetchGitUser, fetchGitRepos }
