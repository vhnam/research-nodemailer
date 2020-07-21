const HttpStatus = require('./httpStatus');

const createError = (
  service,
  code,
  httpStatus = HttpStatus.InternalServerError,
) => ({
  code,
  service,
  httpStatus,
});

const ErrorCode = {
  General: {
    BadRequest: createError(0, 0, HttpStatus.BadRequest),
    NotFound: createError(0, 1, HttpStatus.NotFound),
  },
};

const initializeErrors = (errorCode, prefix) => {
  for (const serviceIndex of Object.keys(errorCode)) {
    for (const codeIndex of Object.keys(errorCode[serviceIndex])) {
      errorCode[serviceIndex][
        codeIndex
      ].message = `${serviceIndex} ${codeIndex}`;
      errorCode[serviceIndex][codeIndex].prefix = prefix;
    }
  }
};

initializeErrors(ErrorCode, 'rnm');

module.exports = ErrorCode;
