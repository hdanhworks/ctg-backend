import express from 'express';
import { saveEmail, getAllEmails, deleteAllEmails } from '../controllers/emailController';

const router = express.Router();

// Ghi nhận email từ người dùng
router.post('/email', saveEmail);

// Lấy tất cả email đã ghi nhận
router.get('/email', getAllEmails);

// Xoá toàn bộ email (dành cho admin hoặc dọn dẹp test)
router.delete('/email/all', deleteAllEmails);

export default router;
