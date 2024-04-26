import Express from "express";
import cors from "cors";
import session from "connect-session-sequelize";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore  from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import SignaturesRoute from "./routes/SignaturesRoute.js";
import ObservationsRoute from "./routes/ObservationsRoute.js";
import HoursRoute from "./routes/HoursRoute.js";
import ClassesRoute from "./routes/ClassesRoute.js";
dotenv.config();

const app = Express();

const sessionStore = SequelizeStore(session.store);

const store = new sessionStore({
    db: db
}); 

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(Express.json());
app.use(UserRoute);
app.use(ClassesRoute);
app.use(HoursRoute);
app.use(ObservationsRoute);
app.use(SignaturesRoute);


app.listen(process.env.APP_PORT, ()=> {
    console.log('server up and running...')
});