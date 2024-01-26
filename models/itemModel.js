const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const itemSchema = new mongoose.Schema(
    {
        imageUrl: {
            type: String,
            required: true
        },

        itemName: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        tags: [{
            type: String,
            required: true
        }],

        ingredients: [{
            type: String,
            required: true
        }],

        steps: [{
            type: String,
            required: true
        }]
    }
);

itemSchema.plugin(AutoIncrement, {
    inc_field: "itemId",
    id: "itemNums",
    start_seq: 100
});

const itemModel = mongoose.model("item", itemSchema);

module.exports = itemModel;