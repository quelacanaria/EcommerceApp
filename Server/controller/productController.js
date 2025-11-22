const Product = require('../models/productModel.js');

const getAllProduct = async(req, res) => {
    try{const viewProducts = await Product.find({});
        if(!viewProducts){
            res.status(404).json({
                success: false,
                message: '404 DATA NOT FOUND',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Successfully fetch the data',
            data: viewProducts
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
}

const getSingleProduct = async(req, res) => {

}

const addProduct = async (req, res) => {
    try{
        const add = await Product.create(req.body);
        if(add){
            res.status(201).json({
            success: true,
            message: 'Product Successfully added to the System.',
            data: add
        })
        }

    }catch(error){
        console.log('error ->', error);
        
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });
    }
}

const updateProduct = async(req, res) => {

}

const deleteProduct = async(req, res) => {

}

module.exports = {
    getAllProduct,
    getSingleProduct,
    addProduct,
    updateProduct,
    deleteProduct
}