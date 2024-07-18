import sequelize from "../DBconnection.js";
import { DataTypes } from "sequelize";
import borrowSchema from "./borrow.model.js";
import bookSchema from "./book.model.js";

const userSchema = sequelize.define("user", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: { type: DataTypes.STRING, allowNull: false },
  role: {
    type: DataTypes.ENUM,
    values: ["user", "admin"],
    defaultValue: "user",
  },
});

userSchema.hasMany(borrowSchema, { onDelete: "CASCADE", onUpdate: "CASCADE" });
borrowSchema.belongsTo(userSchema);

bookSchema.hasMany(borrowSchema, { onDelete: "CASCADE", onUpdate: "CASCADE" });
borrowSchema.belongsTo(bookSchema);

export default userSchema;
