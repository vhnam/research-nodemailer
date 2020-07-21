# Research NodeMailer

## Preparing

Create `.env` file

```
SERVER_PORT=3000
API_VERSION=v1
EMAIL_USERNAME=
EMAIL_PASSWORD=
```

## Usage

- Calling API `localhost:3000/api/v1/email`
- Request body

```
{
	"from": SENDER_EMAIL,
	"to": RECEIVER_EMAIL,
	"subject": SUBJECT,
	"messageBody": "<b>Hello World!</b>"
}
```

## Running

```
npm run start
```
