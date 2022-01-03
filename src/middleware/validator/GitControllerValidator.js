const { check } = require('express-validator')

const fetchUserValidationRules = () => [
  check('username')
    .exists()
    .withMessage('Username Field is required')
    .bail()
    .isString()
    .withMessage('Username Field should be string'),
]

const fetchReposValidationRules = () => [
  check('handle')
    .exists()
    .withMessage('Handle Field is required')
    .bail()
    .isString()
    .withMessage('Handle Field should be string'),
]

export { fetchReposValidationRules, fetchUserValidationRules }
