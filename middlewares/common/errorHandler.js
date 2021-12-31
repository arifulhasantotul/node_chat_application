const createError = require("http-errors");

// 404 not found handler
function notFoundHandler(req, res, next) {
   next(createError(404, "Your requested content was not found!"));
}

// default error handling
const errorHandler = (err, req, res, next) => {
   res.locals.title = "Error page";
   res.render("error");
   // res.render("error", {
   //    title: "Error page",
   // });
};

module.exports = { notFoundHandler, errorHandler };
