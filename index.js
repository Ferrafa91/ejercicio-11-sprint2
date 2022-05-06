const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    textDate: getDate(),
  });
  const getDate = () => {
    const date = new Date().getDay();
    if (date < 6 && date !== 0) {
      return "Hoy es un dia de semana";
    } else {
      return "Hoy es fin de semana";
    }
  };
});
const items = ["notebook", "impresora", "monitor", "mouse"];
app.get("/productos", (req, res) => {
  res.render("productos", { listadoDeProductos: items });
});

app.get("/sobre-nosotros", (req, res) => {
  res.render("sobre-nosotros");
});
app.get("/contacto", (req, res) => {
  res.render("contacto");
});

// LOCAL HOST 3000 //
app.listen(3000);
