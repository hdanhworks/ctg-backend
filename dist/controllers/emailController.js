"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllEmails = exports.getAllEmails = exports.saveEmail = void 0;
const emailModel_1 = __importDefault(require("../models/emailModel"));
// POST: Lưu email
const saveEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    if (!email) {
        res.status(400).json({ message: "Vui lòng nhập email." });
        return;
    }
    try {
        const existing = yield emailModel_1.default.findOne({ email });
        if (existing) {
            res.status(200).json({
                message: "Bạn đã đăng ký trước đó. Cảm ơn bạn đã quan tâm!",
                alreadyRegistered: true,
            });
            return;
        }
        const newEmail = new emailModel_1.default({ email });
        yield newEmail.save();
        res.status(201).json({ message: "Đăng ký thành công! Chúng tôi sẽ gửi thông tin mới nhất đến bạn." });
    }
    catch (err) {
        res.status(500).json({ message: "Đã có lỗi xảy ra. Vui lòng thử lại.", error: err });
    }
});
exports.saveEmail = saveEmail;
// GET: Lấy toàn bộ email
const getAllEmails = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emails = yield emailModel_1.default.find({});
        res.json(emails);
    }
    catch (err) {
        res.status(500).json({ message: "Không thể lấy danh sách email", error: err });
    }
});
exports.getAllEmails = getAllEmails;
// DELETE: Xoá toàn bộ email
const deleteAllEmails = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield emailModel_1.default.deleteMany({});
        res.json({ message: "Đã xoá toàn bộ email." });
    }
    catch (err) {
        res.status(500).json({ message: "Xoá thất bại", error: err });
    }
});
exports.deleteAllEmails = deleteAllEmails;
