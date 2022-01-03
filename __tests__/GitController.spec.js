/* eslint-disable no-undef */
import request from 'supertest'
import server from '../src/index'
import User from '../src/models/User'

describe('Test fetch user API', () => {
  it('It will fetch user detail from git ankitbihani415 || response 200', async () => {
    jest.setTimeout(100 * 1000)
    let user
    const username = 'ankitbihani415'

    await request(server)
      .get(`/api/v1/fetch-user/${username}`)
      .expect(200)
      .then(async (response) => {
        const { body } = response
        expect(Object.keys(body).includes('user')).toBeTruthy()
        user = await User.findOne({ name: username }).exec()
        expect(body.user._id).toBe(user.id)
        expect(body.user.name).toBe(user.name)
        expect(body.user.image).toBe(user.image)
        expect(body.user.follower).toBe(user.follower)
        expect(body.user.following).toBe(user.following)
        expect(body.user.repo_count).toBe(user.repo_count)
        expect(body.user.member_since).toBe(user.member_since.toISOString())
      })
  })

  it('It will fetch user detail from git 415q@213 || response 400', async () => {
    const username = 'ankit@415'

    await request(server)
      .get(`/api/v1/fetch-user/${username}`)
      .expect(400)
      .then((response) => {
        const { body } = response
        expect(Object.keys(body).includes('message')).toBeTruthy()
        expect(body.message).toBe('user not found')
      })
  })
})

describe('Test fetch repos API', () => {
  it('It will fetch all the repos from apache handle || Response 200', async () => {
    const handle = 'apache'
    await request(server)
      .get(`/api/v1/fetch-repos/${handle}`)
      .expect(200)
      .then((response) => {
        const { body } = response
        expect(Object.keys(body).includes('repos')).toBeTruthy()
        const { repos } = body
        expect(Array.isArray(repos)).toBeTruthy()
        expect(repos.length).toBeTruthy()
        for (let repo of repos) {
          expect(Object.keys(repo).includes('owner_name')).toBeTruthy()
          expect(Object.keys(repo).includes('name')).toBeTruthy()
          expect(Object.keys(repo).includes('stars')).toBeTruthy()
          expect(Object.keys(repo).includes('description')).toBeTruthy()
          expect(Object.keys(repo).includes('repo_url')).toBeTruthy()
        }
      })
  })

  it('It will fetch all the repos from apache1@@@ handle || Response 400', async () => {
    const handle = 'apache1@@@'
    await request(server)
      .get(`/api/v1/fetch-repos/${handle}`)
      .expect(400)
      .then((response) => {
        const { body } = response
        expect(Object.keys(body).includes('message')).toBeTruthy()
        expect(body.message).toBe('repos not found')
      })
  })
})
