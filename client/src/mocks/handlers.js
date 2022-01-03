// src/mocks/handlers.js
import { rest } from 'msw'
import user from './data/user'
import repos from './data/repos'

const baseUrl = 'http://127.0.0.1:3001/api/v1'

const handlers = [
  // Get User
  rest.get(`${baseUrl}/fetch-user/:username`, async (req, res, ctx) => {
    return res(ctx.delay(100), ctx.status(200), ctx.json(user))
  }),

  // Get Repos
  rest.get(`${baseUrl}/fetch-repos/:handle`, async (req, res, ctx) => {
    return res(ctx.delay(100), ctx.status(200), ctx.json(repos))
  }),
]

export default handlers
