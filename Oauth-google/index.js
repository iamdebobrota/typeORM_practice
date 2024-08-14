const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  console.log("Homepage");
  res.send({ msg: "This is a homepage" });
});



app.post("/register", (req, res) => {
  const { name, age, gender } = req.body;
  console.log(name, age, gender);
  res.send({ Msg: "Data received" });
});

app.use(express.json());



app.listen(PORT, () => {
  console.log(`Application start on http://localhost:${PORT}`);
});
