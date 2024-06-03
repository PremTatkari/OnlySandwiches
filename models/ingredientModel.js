const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ingredientSchema = new mongoose.Schema(
    {
        ingredientName: {
            type: String,
            required: true
        },

        ingredientPrice: {
            type: Number,
            required: true
        }
    }
);

ingredientSchema.plugin(AutoIncrement, {
    inc_field: "ingredientId",
    id: "ingredientNums",
    start_seq: 1
});

const ingredientModel = mongoose.model("ingredient", ingredientSchema);

module.exports = ingredientModel;