import { DataTypes } from "sequelize";
import sequelize from "../DBconnection.js";

const bookSchema = sequelize.define("book", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: { type: DataTypes.STRING, allowNull: false },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  available: {
    type: DataTypes.BOOLEAN,

    defaultValue: true,
  },
});

export default bookSchema;
