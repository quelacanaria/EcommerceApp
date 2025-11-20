require('dotenv').config({path: '../.env'});
const mongoose = require('mongoose');
const connection = process.env.SECRET;

//Function Expression
//const connectToDb = async function () {};

//Function Declaration
//async function connectToDb() {}

//arrow Function
const connectToDb = async() => {
    try{
        await mongoose.connect(connection);
        console.log('Succcessfully connected to the Database');
    }catch(error){
        console.log('error -> ', error);
    }
}

// connectToDb();
module.exports = connectToDb;

