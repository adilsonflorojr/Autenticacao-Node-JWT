require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser");
const Port = process.env.PORT;

app.use(express.json());
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const login = require("./login");
const register = require("./register")
const user = require("./user");

app.use("/", login);
app.use("/register", register)
app.use("/user", user);

app.listen(Port, function () {
  console.log(`Servidor aberto na porta ${Port}`);
});
