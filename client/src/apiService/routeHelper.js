export const getUserRoute = (username) => {
  return `fetch-user/${username}`
}

export const getRepoRoute = (handle, page) => {
  return `fetch-repos/${handle}?page=${page}`
}
