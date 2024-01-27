const itemModel = require("../models/itemModel");

// use async error handler library next time

const getAllItems = async (req, res) => {
    try {
        const items = await itemModel.find();
        if(!items?.length) {
            return res.status(400).json({message: "No items found"});
        }
        res.json(items);
    } catch(err) {
        console.log(err);
        res.status(500).send({error: "Something went wrong"});
    }
}

const getItem = async (req, res) => {
    try {
        const item = await itemModel.findOne({itemId: req.params["id"]});
        if(!item) {
            return res.status(400).json({message: "Item not found"});
        }
        res.json(item);
    } catch(err) {
        console.log(err);
        res.status(500).send({error: "Something went wrong while finding item"});
    }
}

const addItem = async (req, res) => {
    try {
        const { imageUrl, itemName, description, tags, ingredients, steps } = req.body;

        if(!imageUrl || !itemName || !description || !Array.isArray(tags) || !tags.length || !Array.isArray(ingredients) || !ingredients.length || !Array.isArray(steps) || !steps.length) {
            return res.status(400).json({message: "All fields are required"});
        }

        const newItem = new itemModel({ imageUrl, itemName, description, tags, ingredients, steps });
        await newItem.save();
        res.status(200).json({message: "Item added successfully"});
        // const duplicate = await itemModel.findOne({ itemName }).lean();
        // if(duplicate) {
        //     res.status(400).json({message: "Item already exists"});
        // }
    } catch (err) {
        console.log(err);
        res.status(500).send({error: "Could not add item"});
    }
}

const updateItem = async (req, res) => {
    try {
        const { imageUrl, itemName, description, tags, ingredients, steps } = req.body;

        if(!imageUrl || !itemName || !description || !Array.isArray(tags) || !tags.length || !Array.isArray(ingredients) || !ingredients.length || !Array.isArray(steps) || !steps.length) {
            return res.status(400).json({message: "All fields are required"});
        }
        const item = await itemModel.findOneAndUpdate({itemId: req.params["id"]}, req.body);
        if(!item) {
            return res.status(400).json({message: "Item not found"});
        }
        res.status(200).json({message: "Item updated"});
        // {imageUrl: imageUrl, itemName: itemName, description: description, tags: tags, ingredients: ingredients, steps: steps}
        
    } catch (err) {
        console.log(err);
        res.status(500).json({error: "Could not update item"});
    }
}

const deleteItem = async (req, res) => {
    const id = req.params["id"];
    try {
        await itemModel.findOneAndDelete({ itemId: id });
        res.status(200).json({message: `Deleted item ${id}`});
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getAllItems, getItem, addItem, updateItem, deleteItem };