const express = require("express");
const { getAllIngredients, getIngredient, addIngredient, deleteIngredient, updateIngredient } = require("../controllers/IngredientController")

const router = express.Router();

router.get("/", getAllIngredients);

router.get("/:id", getIngredient);

router.post("/addIngredient", addIngredient);

router.put("/updateIngredient/:id", updateIngredient);

router.delete("/deleteIngredient/:id", deleteIngredient);

module.exports = router;