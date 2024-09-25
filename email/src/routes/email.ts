import { Router } from "express";
import {handleEmailSend} from '../controllers/email-controller';

const router = Router();

router.route('/').get(handleEmailSend)
