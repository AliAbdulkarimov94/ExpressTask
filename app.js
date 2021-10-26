const express = require("express");
const products = require("./products");
const app = express();

app.get("/api/products",(req,res) => {
    res.json(products);
})




app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });