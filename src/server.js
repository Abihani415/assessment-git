import './loadEnv'
import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'
import routes from './routes'
import './database/mongo'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use('/api/v1/', routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export default app
