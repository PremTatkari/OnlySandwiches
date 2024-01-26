const { default: mongoose } = require("mongoose")
const itemModel = require("../models/itemModel");
const { request } = require("express");

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

module.exports = { getAllItems, getItem, addItem };