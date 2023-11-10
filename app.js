const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
// Routes
const staticRoute = require("./route/staticRoutes")


// App
const app = express();
const port = 3000;

// MongoDB Connection

// EJS
app.set("view engine", "ejs");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('./public'));
app.use(express.static('./views/stylesheet'));
app.use("/", staticRoute);

app.get('/hello', (req, res) => {
  res.send('Hello WoRld!')
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})