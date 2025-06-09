import Email from "../models/emailModel"; // đường dẫn tùy bạn

router.delete("/all", async (req: Request, res: Response) => {
  try {
    await Email.deleteMany({});
    res.json({ message: "Đã xoá toàn bộ email." });
  } catch (err) {
    res.status(500).json({ message: "Xoá thất bại", error: err });
  }
});
