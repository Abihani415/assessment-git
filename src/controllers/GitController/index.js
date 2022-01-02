import User from '../../models/User'
import { fetchGitUser, fetchGitRepos } from '../../services/GitService'

const fetchUser = async (req, res) => {
  try {
    const username = req.params.username.toLowerCase()
    let user = await User.findOne({ name: username }).exec()
    if (!user) {
      const body = await fetchGitUser(username)
      if (body) {
        user = await User.create({
          name: body.login.toLowerCase(),
          image: body.avatar_url,
          follower: body.followers,
          following: body.following,
          repo_count: body.public_repos,
          member_since: body.created_at,
          profile_url: body.html_url,
        })
        res.json({ user })
      } else {
        res.status(400).json({
          message: 'user not found',
        })
      }
    } else {
      res.json({ user })
    }
  } catch (error) {
    res.status(500).json({
      message: 'something went wrong',
      error,
    })
  }
}

const fetchRepos = async (req, res) => {
  try {
    const handle = req.params.handle.toLowerCase()
    const page = req.query.page ? req.query.page : 1
    const limit = req.query.limit ? req.query.limit : 10
    const userDetail = await fetchGitUser(handle)
    const repos = await fetchGitRepos(handle, page, limit)
    if (repos && userDetail) {
      const mappedRepos = repos.map((repo) => ({
        name: repo.name.toLowerCase(),
        owner_name: repo.owner.login.toLowerCase(),
        stars: repo.stargazers_count,
        description: repo.description,
        repo_url: repo.html_url,
      }))
      const totalPages = Math.ceil(userDetail.public_repos / limit)
      res.json({
        repos: mappedRepos,
        page,
        limit,
        totalPages,
      })
    } else {
      res.status(400).json({
        message: 'repos not found',
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'something went wrong',
      error,
    })
  }
}

export { fetchUser, fetchRepos }
