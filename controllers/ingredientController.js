const ingredientModel = require("../models/ingredientModel");

// use async error handler library next time

const getAllingredients = async (req, res) => {
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

const getingredient = async (req, res) => {
    try {
        const ingredient = await ingredientModel.findOne({ingredientId: req.params["id"]});
        if(!ingredient) {
            return res.status(400).json({message: "ingredient not found"});
        }
        res.json(ingredient);
    } catch(err) {
        console.log(err);
        res.status(500).send({error: "Something went wrong while finding ingredient"});
    }
}

const addingredient = async (req, res) => {
    try {
        const { ingredientName, ingredientPrice } = req.body;

        if(!ingredientName || !ingredientPrice) {
            return res.status(400).json({message: "All fields are required"});
        }

        const newingredient = new ingredientModel({ ingredientName, ingredientPrice });
        await newingredient.save();
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

const updateingredient = async (req, res) => {
    try {
        const { ingredientName, ingredientPrice } = req.body;

        if(!ingredientName || !ingredientPrice) {
            return res.status(400).json({message: "All fields are required"});
        }
        const ingredient = await ingredientModel.findOneAndUpdate({ingredientId: req.params["id"]}, req.body);
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

const deleteingredient = async (req, res) => {
    const id = req.params["id"];
    try {
        await ingredientModel.findOneAndDelete({ ingredientId: id });
        res.status(200).json({message: `Deleted ingredient ${id}`});
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getAllingredients, getingredient, addingredient, updateingredient, deleteingredient };