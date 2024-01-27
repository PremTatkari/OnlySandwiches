const express = require("express");
const { getAllItems, getItem, addItem, deleteItem, updateItem } = require("../controllers/itemController")

const router = express.Router();

router.get("/", getAllItems);

router.get("/:id", getItem);

router.post("/addItem", addItem);

router.put("/updateItem/:id", updateItem);

router.delete("/deleteItem/:id", deleteItem);

module.exports = router;