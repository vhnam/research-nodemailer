const AppError = require('../../utils/appError');
const ErrorCode = require('../../utils/ErrorCode');
const HttpStatus = require('../../utils/httpStatus');

const EmailService = require('../../services/email');

exports.send = async (req, res, next) => {
  try {
    const {from, to, subject, messageBody} = req.body;

    const info = await EmailService.send({
      from,
      to,
      subject,
      messageBody,
    });

    res.status(HttpStatus.Created).send({
      messageId: info.messageId,
    });
  } catch (err) {
    next(new AppError(ErrorCode.General.BadRequest, err));
  }
};
