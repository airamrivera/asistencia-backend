import{sequelize} from "sequelize";

const db = new sequelize ('asistencia','root','',{
    host:"localhost",
    dialect:"mysql"
});
export default db;


