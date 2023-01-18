const { CustomAPIError } = require('../errors/custom-error')
//with CustomAPIError we can create our own error and send it through differet routes
//if no error is send, then default error will be send
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  } //note: here i have used statusCode because it is written in custom error file lik this
  return res.status(500).json({ msg: 'Something went wrong, please try again' })
}

module.exports = errorHandlerMiddleware
