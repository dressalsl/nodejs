const mongoose = require('mongoose');
//Schema --> Quais os campos e valores que um produto vai ter

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
// Pra dizer que o Product tem esses Schema no model
mongoose.model('Product', ProductSchema);