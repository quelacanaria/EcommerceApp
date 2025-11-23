import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from "./Card"
function Products({count}){
    const [products, setProducts] = useState([]);
        const showProducts = async() => {
            try{
                const response = await axios.get('http://localhost:3000/api/products/get')
                console.log('response -> ', response.data.data);
                setProducts(response.data.data);
            }catch(error){
                console.log('error -> ', error)
            }}
    useEffect(() => {
            showProducts();
            console.log(count);
    }, [count]);

    return(
        <>
            <div className="h-120 w-full bg-blue-200 flex items-center justify-center">
                <div className="h-5/6 w-5/6  flex flex-wrap  ">
                    {products.map((product) => 
                            <Card key={product._id} 
                                  name={product.pname} 
                                  price={`$${product.price}.00`} 
                                  description={product.description}/>
                    )}
                </div>
            </div>
        </>
    )
}

export default Products