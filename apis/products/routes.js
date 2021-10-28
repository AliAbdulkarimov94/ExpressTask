
const express = require("express");

const {
  productListFetch,
  productCreate,
  productDelete,
  productUpdate,
} = require("./controllers");

const router = express.Router();

router.post("/", productCreate);

router.get("/", productListFetch);

router.put("/:productId", productUpdate);

router.delete("/:productId", productDelete);

module.exports = router;