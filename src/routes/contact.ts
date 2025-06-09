import express from 'express';
import { saveContact, getAllContacts } from '../controllers/contactController';

const router = express.Router();

router.post('/contact', saveContact);
router.get('/contact', getAllContacts); // cho admin kiểm tra

export default router;
