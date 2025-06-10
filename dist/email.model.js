"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const EmailSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true },
    message: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
});
exports.Email = mongoose_1.default.model("Email", EmailSchema);
