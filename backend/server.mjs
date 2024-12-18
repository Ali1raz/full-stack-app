import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log(`REQUESTED: ${req.url}`);
  res.status(201).send({ msg: "ali raza" });
});

app.listen(PORT, () => {
  console.log(`backend server is listening on: localhost:${PORT}`);
});
