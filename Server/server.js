require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectToDb = require('./database/database.js')
const router = require('./routes/productRoutes.js')

const app = express();

connectToDb();
app.use(cors());
app.use(express.json());
app.use('/api/products',router)

const port = process.env.PORT;
 
app.listen(port, () => {
    console.log(`Server is now listening to the port ${port}`);
});
