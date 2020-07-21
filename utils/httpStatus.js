const HttpStatus = {
  Created: 201,
  BadRequest: 400,
  NotFound: 404,
  InternalServerError: 500,
};

for (const key of Object.keys(HttpStatus)) {
  HttpStatus[HttpStatus[key]] = key;
}

module.exports = HttpStatus;
