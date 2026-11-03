## Setting up dev environment

When setting up the dev environment, make sure you have the following environment variables set in the backend's .env file:

```env
GEMINI_KEY=example_key

#host should be 0.0.0.0 to allow the docker container to be accessible from the host
HOST= 0.0.0.0

PORT=4000

#mongo url to connect to the mongo database.
MONGO_URL=
```
