const ingredientModel = require("../models/ingredientModel");

// use async error handler library next time

const getAllIngredients = async (req, res) => {
    try {
        const ingredients = await ingredientModel.find();
        if(!ingredients?.length) {
            return res.status(400).json({message: "No ingredients found"});
        }
        res.json(ingredients);
    } catch(err) {
        console.log(err);
        res.status(500).send({error: "Something went wrong"});
    }
}

const getIngredient = async (req, res) => {
    try {
        const ingredient = await ingredientModel.findOne({ingredientName: req.params["name"]});
        if(!ingredient) {
            return res.status(400).json({message: "ingredient not found"});
        }
        res.json(ingredient);
    } catch(err) {
        console.log(err);
        res.status(500).send({error: "Something went wrong while finding ingredient"});
    }
}

const addIngredient = async (req, res) => {
    try {
        const { ingredientName, ingredientPrice } = req.body;

        if(!ingredientName || !ingredientPrice) {
            return res.status(400).json({message: "All fields are required"});
        }

        const newIngredient = new ingredientModel({ ingredientName, ingredientPrice });
        await newIngredient.save();
        res.status(200).json({message: "ingredient added successfully"});
        // const duplicate = await ingredientModel.findOne({ ingredientName }).lean();
        // if(duplicate) {
        //     res.status(400).json({message: "ingredient already exists"});
        // }
    } catch (err) {
        console.log(err);
        res.status(500).send({error: "Could not add ingredient"});
    }
}

const updateIngredient = async (req, res) => {
    try {
        const { ingredientName, ingredientPrice } = req.body;

        if(!ingredientName || !ingredientPrice) {
            return res.status(400).json({message: "All fields are required"});
        }
        const ingredient = await ingredientModel.findOneAndUpdate({ingredientName: req.params["name"]}, req.body);
        if(!ingredient) {
            return res.status(400).json({message: "ingredient not found"});
        }
        res.status(200).json({message: "ingredient updated"});
        // {imageUrl: imageUrl, ingredientName: ingredientName, description: description, tags: tags, ingredients: ingredients, steps: steps}
        
    } catch (err) {
        console.log(err);
        res.status(500).json({error: "Could not update ingredient"});
    }
}

const deleteIngredient = async (req, res) => {
    const id = req.params["name"];
    try {
        await ingredientModel.findOneAndDelete({ ingredientName: name });
        res.status(200).json({message: `Deleted ingredient ${name}`});
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getAllIngredients, getIngredient, addIngredient, updateIngredient, deleteIngredient };