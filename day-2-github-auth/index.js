const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const client_id = "Ov23licqsUw52sXUqJCS";
const client_secret = "2d428f5e909659c7dc177ac6c345b9f02d40d17c";

app.use(cors());

app.get("/", (req, res) => {
  console.log("This is a home page");
  res.send({ msg: "This is a Homepage!" });
});

app.get("/login-with-github", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/auth/github", async (req, res) => {
  const code = req.query.code;

  const respose = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: client_id,
      client_secret: client_secret,
      code: code,
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
  console.log(respose);
  const access_token = respose.access_token;

  const user_data = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
console.log("userdata", user_data);


  res.send("Github callback route page " + code);
});

app.listen(PORT, () => {
  console.log("Application start on port 8080");
});
