const express = require("express");
const StoreRoute = express.Router();

const { getStore, postStore, addComment,getproduct,addCart ,getCart,removeCart} = require("../Controler/stors");
const { authentication } = require("../midlleWare/authentication");

StoreRoute.get("/store", authentication, getStore);
StoreRoute.get("/cart/:id", authentication, getCart);

StoreRoute.get("/product/:id",authentication, getproduct);

StoreRoute.post("/store", authentication, postStore);
StoreRoute.post("/cart/:id", authentication, addCart);
StoreRoute.delete("/cart/:id", authentication, removeCart);
StoreRoute.post("/comment/:id", authentication, addComment);

module.exports = StoreRoute;
