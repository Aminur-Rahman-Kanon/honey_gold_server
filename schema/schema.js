const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    title: { type: String, required: true, index: true },
    category: { type: String, required: true },
    rating: { type: String },
    price: { type: Object, required: true },
    color: { type: Array },
    img: { type: Array, required: true },
    material: { type: String },
    pattern: { type: String },
    description: { type: String }
})

const productModel = new mongoose.model('product', productSchema);

module.exports = {
    productModel
}
