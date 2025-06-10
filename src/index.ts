import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Load biến môi trường từ .env (dùng khi chạy local)
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Kết nối MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/ctg-local';

mongoose
  .connect(mongoURI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
import contactRoutes from './routes/contact';
import emailRoutes from './routes/email';

app.use('/api', contactRoutes);
app.use('/api', emailRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
