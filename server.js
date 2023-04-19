import express from "express";
import path from "path";
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.static("/"));
app.use(express.static(path.join("/", "build")));
app.get("/ping", function (req, res) {
  return res.send("pong");
});
app.get("/*", function (req, res) {
  res.sendFile(path.join("/", "build", "index.html"));
});
app.listen(PORT);
