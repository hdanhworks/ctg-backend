import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({
  email: { type: String, required: true },
  message: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

export const Email = mongoose.model("Email", EmailSchema);
