"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const email_1 = __importDefault(require("./routes/email"));
const contact_1 = __importDefault(require("./routes/contact"));
const app = (0, express_1.default)();
const PORT = 3001;
const MONGO_URI = 'mongodb://localhost:27017/ctgdb'; // tên database: ctgdb
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api', email_1.default);
app.use('/api', contact_1.default);
// Kết nối MongoDB và khởi động server
mongoose_1.default
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
