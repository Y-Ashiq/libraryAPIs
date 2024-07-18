import bookSchema from "../../database/models/book.model.js";
import borrowSchema from "../../database/models/borrow.model.js";

const borrow = async (req, res) => {
  const book = await bookSchema.findByPk(req.params.id);

  if (!book || !book.available) {
    res.json({ message: "not found nor available" });
  } else {
    await borrowSchema.create({
      bookId: req.params.id,
      userId: req.body.userId,
    });
    await bookSchema.update(
      { available: false },
      { where: { id: req.params.id } }
    );
    res.json({ message: "book borrowed" });
  }
};
const returnBook = async (req, res) => {
  const book = await borrowSchema.findByPk(req.body.id);

  if (!book) {
    res.json({ message: "no borrowed book found" });
  } else {
    await borrowSchema.update(
      { returned: true },
      { where: { id: req.body.id } }
    );
    await bookSchema.update(
      { available: true },
      { where: { id: req.params.id } }
    );
    res.json({ message: "book returend" });
  }
};

const getBorrowed = async (req, res) => {
  const book = await borrowSchema.findOne({ where: { returned: false } });

  if (book.returned) {
    res.json({ message: "no books found" });
  } else {
    res.json(book);
  }
};

export default { borrow, returnBook, getBorrowed };
