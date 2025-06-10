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
exports.getAllContacts = exports.saveContact = void 0;
const contactModel_1 = __importDefault(require("../models/contactModel"));
const saveContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message } = req.body;
    try {
        const newContact = new contactModel_1.default({ name, email, message });
        yield newContact.save();
        res.status(201).json({ message: 'Thông tin của bạn đã được gửi thành công!' });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Lỗi máy chủ. Vui lòng thử lại sau.' });
    }
});
exports.saveContact = saveContact;
const getAllContacts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield contactModel_1.default.find().sort({ createdAt: -1 });
    res.json(contacts);
});
exports.getAllContacts = getAllContacts;
