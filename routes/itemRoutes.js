const express = require("express");
const { getAllItems, getItem, addItem, deleteItem } = require("../controllers/itemController")

const router = express.Router();

router.get("/", getAllItems);

router.get("/:id", getItem);

router.post("/addItem", addItem);

router.delete("/deleteItem/:id", deleteItem);

module.exports = router;