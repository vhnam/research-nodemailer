const AppError = require('../utils/appError');
const ErrorCode = require('../utils/ErrorCode');

const NotFoundMiddleWare = (req, res, next) => {
  const {error} = new AppError(ErrorCode.General.NotFound).toJSON();
  res.status(error.httpStatus).send({
    message: error.message,
    stack: error.stack,
    code: error.code,
  });
};

const AppErrorMiddleWare = (err, req, res, next) => {
  const {error} = err.toJSON();
  const {httpStatus, ...others} = error;

  res.status(httpStatus).send({...others});
};

module.exports = {
  NotFoundMiddleWare,
  AppErrorMiddleWare,
};
