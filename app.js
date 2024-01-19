const port = 8080;
const express = require("express");
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./public" });
});

app.listen(process.env.PORT || port, () => {
  console.log(`Versatile is running at localhost:${port}`);
});
