const express = require("express");
const path = require("path");

const app = express();

// Settings

app.set("port", 4000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

// middlewares

// Routes

app.use(require("./routes/index"));

// static files
app.use(express.static(__dirname + "/public"));

//port
app.listen(app.get("port"), () => {
  console.log("Server running on port --> ", app.get("port"));
});
