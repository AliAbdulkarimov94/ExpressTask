const express = require("express");
const connectDb = require("./db/databas");
const productRoutes =require("./apis/products/routes");
const app = express();

app.use(express.json());
app.use("/api/products",productRoutes);

connectDb();

app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });