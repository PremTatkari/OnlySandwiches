const express = require("express");
const { getAllIngredients, getIngredient, addIngredient, deleteIngredient, updateIngredient } = require("../controllers/IngredientController")

const router = express.Router();

router.get("/", getAllIngredients);

router.get("/:name", getIngredient);

router.post("/addIngredient", addIngredient);

router.put("/updateIngredient/:name", updateIngredient);

router.delete("/deleteIngredient/:name", deleteIngredient);

module.exports = router;