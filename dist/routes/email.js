"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const emailController_1 = require("../controllers/emailController");
const router = express_1.default.Router();
router.post('/email', emailController_1.saveEmail);
router.get('/email', emailController_1.getAllEmails);
router.delete('/email/all', emailController_1.deleteAllEmails);
exports.default = router;
