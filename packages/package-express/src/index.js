const express = require('express')
const app = express()
const { port } = require('./config/env')
const logger = require('./middlewares/logger')
const routes = require('./routes')

app.use(logger)
app.use(express.json())
app.use('/', routes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
