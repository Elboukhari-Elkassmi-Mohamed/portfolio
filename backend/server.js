require("dotenv").config();
const express = require("express");
const app = express();
require("./config/db_config");
const cookies = require("cookie-parser");
const cors = require('cors')

const authRouter = require("./routers/authRoute");

const errorHandler = require("./middleware/errorHandler");


app.use(cors({ origin:true, credentials:true }));
app.use(cookies());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use("/api/auth", authRouter);


// app.use("/api/user",userRouter);

app.all("*", (req, res, next) => {
  next({ status: 404, message: `Can't find this route :${req.originalUrl}` });
});

app.use(errorHandler);

const port = process.env.PORT||3333

app.listen(port, (err) => {
  !err
    ? console.log("app is runnig on port " + port)
    : console.log("error : " + err);
});


module.exports = app