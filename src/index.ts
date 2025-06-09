import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import emailRoutes from './routes/email';
import contactRoutes from './routes/contact';



const app = express();
const PORT = 3001;
const MONGO_URI = 'mongodb://localhost:27017/ctgdb'; // tên database: ctgdb

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', emailRoutes);
app.use('/api', contactRoutes);

// Kết nối MongoDB và khởi động server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
