
const express = require ("express");
const router = express.Router();

let products = require("../../products");


router.get("/api/products",(req,res) => {
    res.json(products);
})

router.post("/api/products",(req,res) =>{
    console.log(req.body);
    products.push(req.body);
    res.status(201);
    res.json(req.body)
})

router.delete("/api/products/:productId",(req,res) => {
    const productId = req.params.productId;
    const product = products.find((product) => product.id ===+productId );
    if (product){
        products = products.filter( (product) => product.id !== +productId);
        res.status(204)
        return res.end()

    }
})

module.exports = router