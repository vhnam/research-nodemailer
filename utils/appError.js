const logger = require('winston');
const padStart = require('lodash/padStart');

class AppError {
  constructor(errorCode, details) {
    this._errorCode = errorCode;
    this._details = details;

    logger.error({
      ...errorCode,
      stack: this._details.message,
      timestamp: Date.now(),
    });
  }

  toJSON() {
    return {
      error: {
        code: `${this._errorCode.prefix}${AppError._code(this._errorCode)}`,
        message: this._errorCode.message,
        httpStatus: this._errorCode.httpStatus,
        stack: this._details.message,
      },
    };
  }

  static _code(errorCode) {
    return `${errorCode.httpStatus}${padStart(
      errorCode.service,
      2,
      '0',
    )}${padStart(errorCode.code, 2, '0')}`;
  }
}

module.exports = AppError;
