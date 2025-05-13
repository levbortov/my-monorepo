const send = require('../utils/responseWrapper')

exports.home = (_, res) => {
  send(res, { message: 'API is working' })
}
