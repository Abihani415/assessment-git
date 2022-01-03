# Github API

An application for fetching details of any Github handle.
In this project we have used following dependencies.

## For Server

| Package                | Version |
| ---------------------- | ------- |
| node                   | 17.3.0  |
| express                | 4.17.2  |
| node-fetch             | 2.6.6   |
| cors                   | 2.8.5   |
| eslint-config-prettier | 8.3.0   |
| express-validator      | 6.14.0  |
| mongoose               | 6.1.4   |
| swagger-ui-express     | 4.3.0   |
| jest                   | 27.4.5  |
| supertest              | 6.1.6   |

## For Client

| Package                   | Version |
| ------------------------- | ------- |
| node                      | 17.3.0  |
| react                     | 17.0.2  |
| react-bootstrap           | 2.1.0   |
| react-hook-form           | 7.22.5  |
| react-redux               | 7.2.6   |
| @reduxjs/toolkit          | 1.7.1   |
| @testing-library/jest-dom | 5.16.1  |
| @testing-library/react    | 12.1.2  |
| msw                       | 0.36.3  |
| react-router-dom          | 6.2.1   |

## Project Setup

#### Clone the project

```bash

git clone https://github.com/Abihani415/assessment-git.git

```

#### Go to the project directory

```bash

cd assessment-git

```

#### Install dependencies

```bash

npm run installpkg

```

## Install MongoDB

https://www.mongodb.com/try/download/community?tck=docs_server

## Environment Variables

To run this project, you will need to add the following environment variables to your server `.env` file

`MONGO_DB_URI`

#### Start the server

```bash

npm run dev

```

#### project will start at `http://127.0.0.1:3000`

#### Run test cases

```bash

npm run test-dev
```

## Swagger API Reference

Swagger API can be accessed from `http://127.0.0.1:3001/api-docs`

## Postman collection Reference

File `Assessment Git.postman_collection.json` is at root folder

#### Get user details

```http

GET /api/v1/fetch-user/:username

```

| Parameter  | Type     | Description                   |
| ---------- | -------- | ----------------------------- |
| `username` | `string` | **Required**. Github username |

#### Get user repositories

```http

GET api/v1/fetch-repos/:handle

```

| Parameter | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| `handle`  | `string` | **Required**. Github handle/ username |

## Future enhancement

- can use typescript
- can write more test cases
- can do ui/ux improvements
- add internal process, so that it sync GIT updates of that user and handle to our database

### UI Demo

#### User page

![user](https://user-images.githubusercontent.com/96728968/148246865-0a3381e6-d541-4991-a32c-d926856619e6.png)

#### repos page

![repos](https://user-images.githubusercontent.com/96728968/148247257-68ad4e62-7c9e-4d46-8d75-6e72fd6ab864.png)

## Author

### [@Abihani415](https://www.github.com/Abihani415)
