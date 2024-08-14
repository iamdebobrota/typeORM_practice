const express = require("express");
const app = express();
const { restrict } = require("./middleware/restrict.middleware");
const { logger } = require("./middleware/logger.middleware");
const PORT = 8080;
const cors = require("cors");

app.use(cors());
// app.use(restrict);
app.use(logger);

app.get("/", (req, res) => {
  console.log("Home page");
  res.send({ Msg: "This is a Home page!" });
});

app.get("/about", (req, res) => {
  console.log("About page");
  res.send({ Msg: "This is a About page!" });
});
app.get("/blogs", (req, res) => {
  console.log("Blog page");
  res.send({ Msg: "This is a Blog page!" });
});

app.get("/contact", (req, res) => {
  console.log("Contact page");
  res.send({ Msg: "This is a Contact page!" });
});
app.get("/photos", (req, res) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json()) // Use a different name for the response from fetch
      .then((data) => {
        res.send(data); // Use 'res' to send the response back to the client
      })
      .catch((err) => {
        res.send({ Msg: "Photos page got some errors!", err });
      });
  });
app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
