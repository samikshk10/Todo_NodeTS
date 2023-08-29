import express,{ Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
const appConfig = require('./config/appConfig');

const todoRouter = require('./routes/todo.routes');
const sequelize = require("./config/sequelizeConfig");
const app = express();


dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", todoRouter);



const initApp = async () => {
    console.log("Testing the database connection..");
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
      app.listen(appConfig.PORT, () => {
        console.log(`Server is up and running at PORT : ${appConfig.PORT}}`);
      });
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  initApp();