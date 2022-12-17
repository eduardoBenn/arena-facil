const express = require("express");

const dbConnect = require("./db/connect");
const bodyParser = require("body-parser");
const user_routes = require("./routes/user");
const book_routes = require("./routes/book");
const auth_routes = require("./routes/auth");
const auth = require("./auth");

const app = express();
dbConnect();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.status(200).json({ message: "welcome" });
});

app.use("/api/auth", auth_routes);
app.use("/api/users", user_routes);
app.use("/api/book", book_routes);

// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
  response.send({ message: "You are authorized to access me" });
});

app.listen(8080);
