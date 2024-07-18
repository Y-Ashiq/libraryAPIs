import { Sequelize } from "sequelize";

const sequelize = new Sequelize("library", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log("error" + error);
  });

export default sequelize;
