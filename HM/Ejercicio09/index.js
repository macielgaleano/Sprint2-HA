const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

// app.get("/hackers/2020/virus.exe", (req, res) => {
//   res.send("Jajaja 👹");
// });

app.get("/multiplicar", (req, res) => {
  const num1 = req.query.num1;
  const num2 = req.query.num2;
  res.send(num1 * num2);
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000...");
  console.log("Ingresar a http://localhost:3000");
});
