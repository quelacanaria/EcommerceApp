const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
//     image:{type: String,
//            required: [true, 'Product Image is required!!'],
//            trim: true,
//            maxLength: [1000, 'Product Image url cannot be more than 1000 characters']},
    name:{type: String,
          required: [true, 'Product Name is required!!'],
          trim: true,
          maxLength: [50, 'Product Name cannot be more than 50']},
    price:{type: Number,
           required: [true, 'Product Price is required!!'],
           trim: true,
           maxLength: [1000000000000000000000000, 'Product Price cannot be more than 1000000000000000000000000']},
    description:{type: String,
                 required: [true, 'Product Description is Required'],
                 trim: true,
                 maxLength: [1000, 'Product description cannot be more than 1000']},
    createdAt:{type: Date,
               default: Date.now}
});

module.exports = mongoose.model('productModel', ProductSchema);