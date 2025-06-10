import { Request, Response } from "express";
import Email from "../models/emailModel";
import { RequestHandler } from 'express';


// POST: Lưu email
export const saveEmail: RequestHandler = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ message: "Vui lòng nhập email." });
    return;
  }

  try {
    const existing = await Email.findOne({ email });
    if (existing) {
      res.status(200).json({
        message: "Bạn đã đăng ký trước đó. Cảm ơn bạn đã quan tâm!",
        alreadyRegistered: true,
      });
      return;
    }

    const newEmail = new Email({ email });
    await newEmail.save();

    res.status(201).json({ message: "Đăng ký thành công! Chúng tôi sẽ gửi thông tin mới nhất đến bạn." });
  } catch (err) {
    res.status(500).json({ message: "Đã có lỗi xảy ra. Vui lòng thử lại.", error: err });
  }
};


// GET: Lấy toàn bộ email
export const getAllEmails: RequestHandler = async (_req, res) => {
  try {
    const emails = await Email.find({});
    res.json(emails);
  } catch (err) {
    res.status(500).json({ message: "Không thể lấy danh sách email", error: err });
  }
};


// DELETE: Xoá toàn bộ email
export const deleteAllEmails: RequestHandler = async (_req, res) => {
  try {
    await Email.deleteMany({});
    res.json({ message: "Đã xoá toàn bộ email." });
  } catch (err) {
    res.status(500).json({ message: "Xoá thất bại", error: err });
  }
};
