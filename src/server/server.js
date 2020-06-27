import HTTP from "http";
import Express from "express";
import PORT from "../config/port";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv-safe";
import morgan from "morgan";

dotenv.config();
const app = Express();

const StartServer = () => {
  return new Promise((resolve, reject) => {
    const HTTPSERVER = HTTP.createServer(app);

    app.use(morgan("combined"));
    app.use(cors());
    app.use(Express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    HTTPSERVER.listen(PORT)
      .on("listening", () => {
        console.log(`Server starting in localhost:${PORT}`);
        resolve();
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

export default StartServer;
