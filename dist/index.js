"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load biến môi trường từ .env (dùng khi chạy local)
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Kết nối MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/ctg-local';
mongoose_1.default
    .connect(mongoURI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
const contact_1 = __importDefault(require("./routes/contact"));
const email_1 = __importDefault(require("./routes/email"));
app.use('/api', contact_1.default);
app.use('/api', email_1.default);
// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
