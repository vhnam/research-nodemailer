const dotenv = require('dotenv').config();

if (dotenv.error) {
  throw dotenv.error;
}

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const logger = require('winston');
const helmet = require('helmet');

const port = process.env.SERVER_PORT;
const apiVersion = process.env.API_VERSION;
const router = require(`./routes/${apiVersion}`);

const {NotFoundMiddleWare} = require('./middlewares/error');
const {AppErrorMiddleWare} = require('./middlewares/error');

if (process.env.NODE_ENV === 'development') {
  logger.add(new logger.transports.Console());
}

const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(`/api/${apiVersion}`, router);

app.use(NotFoundMiddleWare);
app.use(AppErrorMiddleWare);
app.use(errorHandler());

app.set('port', port);
app.listen(app.get('port'), () => {
  logger.add(new logger.transports.File({filename: 'combined.log'}));
  logger.info(`Express server listening on port ${port}`);
});

module.exports = app;
