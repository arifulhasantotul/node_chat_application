const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const loginRouter = require("./Router/loginRouter");
const usersRouter = require("./Router/usersRouter");
const inboxRouter = require("./Router/inboxRouter");

// internal imports
const {
   notFoundHandler,
   errorHandler,
} = require("./middlewares/common/errorHandler");

// express app initialization
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

// database connection
mongoose
   .connect(process.env.MONGOOSE_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => console.log("mongoose connection successful!"))
   .catch((err) => console.log(err));

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parser cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// router setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// 404 not found handler
app.use(notFoundHandler);

// default error handler
app.use(errorHandler);

app.listen(port, () => {
   console.log(`node chat application server on port`, port);
});
