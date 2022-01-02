import express from 'express';
import validate from '../middleware/validator/Validate';
import {
  fetchReposValidationRules,
  fetchUserValidationRules,
} from '../middleware/validator/GitControllerValidator';
import { fetchUser, fetchRepos } from '../controllers/GitController';

const router = express.Router();

router.get('/fetch-user/:username', fetchUserValidationRules(), validate, fetchUser);
router.get('/fetch-repos/:handle', fetchReposValidationRules(), validate, fetchRepos);

export default router;
