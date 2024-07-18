import bookSchema from "../../database/models/book.model.js";

import { Op } from "sequelize";

const addBook = async (req, res) => {
  let books = await bookSchema.create(req.body);
  res.json({ message: "book added successfully", books });
};

const getAllBook = async (req, res) => {
  const search = req.query.search;
  if (search) {
    let books = await bookSchema.findAll({
      where: {
        [Op.or]: {
          id: search,
          name: search,
          author: search,
          genre: search,
        },
      },
    });
    res.json(books);
  } else {
    let books = await bookSchema.findAll();
    res.json(books);
  }
};

const updateBook = async (req, res) => {
  let findBook = await bookSchema.findByPk(req.params.id);

  if (findBook) {
    await bookSchema.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "book has been updated" });
  } else {
    res.json({ message: "no book found" });
  }
};

const deleteBook = async (req, res) => {
  let findBook = await bookSchema.findByPk(req.params.id);

  if (findBook) {
    await bookSchema.destroy({ where: { id: req.params.id } });
    res.json({ message: "book has been deleted" });
  } else {
    res.json({ message: "no book found" });
  }
};

export default { addBook, updateBook, deleteBook, getAllBook };
