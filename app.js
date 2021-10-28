const express = require("express");
const connectDb = require("./db/databas");
const productRoutes =require("./apis/products/routes");
const app = express();

app.use(express.json());
app.use("/api/products",productRoutes);

app.use((req, res, next) => {
    console.log(
      `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
    );
    next();
  });

  app.use((req, res, next) => {
    res.status(404).json({ message: "Path not found" });
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message || "Internal Server Error",
    });
  });

  exports.productCreate = async (req, res, next) => {
    try {
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
    else {
        next({status: 404, message: "Product Not Found"});
      }
    };

connectDb();

app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });