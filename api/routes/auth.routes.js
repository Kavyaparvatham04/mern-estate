import express from 'express';
import {signup, signin} from '../controllers/auth.controller.js';
import { google as googleHandler } from '../controllers/auth.controller.js';
const router = express.Router();

export const signupRouter = router.post('/sign-up', signup);
export const signinRouter = router.post('/sign-in', signin);
export const google = router.post('/google', googleHandler);