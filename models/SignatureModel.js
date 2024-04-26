// En models/Asignature.js

import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Hours from "./HoursModel.js";

const { DataTypes } = Sequelize;

const Signature = db.define('signatures', {
    uuid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    signatureName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    // Puedes agregar más atributos según tus necesidades
},{
    userId:{ 
   type: DataTypes.INTEGER,
    allowNull: false,
     validate:{
        notEmpty: true

        } 
       }
       
       },{ freezeTableName: true 
       });

// Relación entre Users y Classes (muchos a muchos)
Users.hasMany(Signature);
Signature.belongsTo(Users, {foreignKey: 'userId'});


export default Signature;