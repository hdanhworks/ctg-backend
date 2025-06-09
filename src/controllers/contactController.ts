import Contact from '../models/contactModel';
import { Request, Response } from 'express';

export const saveContact = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    return res.status(201).json({ message: 'Thông tin của bạn đã được gửi thành công!' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Lỗi máy chủ. Vui lòng thử lại sau.' });
  }
};

export const getAllContacts = async (_req: Request, res: Response) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
};
