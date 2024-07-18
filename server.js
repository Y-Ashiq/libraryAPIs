import express from "express";
import userRourter from "./src/modules/userModule/user.routes.js";
import sequelize from "./src/database/DBconnection.js";
import bookRourter from "./src/modules/bookModule/book.routes.js";
import borrowRourter from "./src/modules/borrowModule/borrow.routes.js";
const app = express();
const port = 3000;

sequelize.sync();

app.use(express.json());

app.use(userRourter);
app.use(bookRourter);
app.use(borrowRourter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
