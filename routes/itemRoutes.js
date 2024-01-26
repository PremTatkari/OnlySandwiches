const express = require("express");
const { getAllItems, getItem, addItem } = require("../controllers/itemController")

const router = express.Router();

router.get("/", getAllItems);

router.get("/:id", getItem);

router.post("/addItem", addItem);

module.exports = router;