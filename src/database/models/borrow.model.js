import { DataTypes } from "sequelize";
import sequelize from "../DBconnection.js";



const borrowSchema = sequelize.define("borrow", {
returned:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
}
});

export default borrowSchema;
