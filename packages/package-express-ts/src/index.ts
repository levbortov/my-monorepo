import express from 'express'
import { config } from './config/env'
import logger from './middlewares/logger'
import routes from './routes'

const app = express()

app.use(logger)
app.use(express.json())
app.use('/', routes)

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})
