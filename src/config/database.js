require("dotenv-safe").config();

module.exports = {
  development: {
    username: process.env.DEV_USERNAME,
    password: "",
    database: process.env.DEV_DATABASE,
    host: process.env.DEV_HOST,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.PD_USERNAME,
    password: process.env.PD_PASSWORD,
    database: process.env.PD_DATABASE,
    host: process.env.PD_HOST,
    dialect: "mysql",
  },
};
