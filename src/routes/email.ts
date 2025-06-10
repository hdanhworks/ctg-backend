import express from 'express';
import { saveEmail, getAllEmails, deleteAllEmails } from '../controllers/emailController';

const router = express.Router();

router.post('/email', saveEmail);
router.get('/email', getAllEmails);
router.delete('/email/all', deleteAllEmails);

export default router;
