const nodemailer = require('nodemailer');

const send = async (params) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: params.from,
      to: params.to,
      subject: params.subject,
      html: params.messageBody,
    });

    return info;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  send,
};
