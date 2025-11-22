import React, {useState, useEffect} from "react";
import axios from 'axios'
function Form(){
    const [forms, setForms] = useState({
        pname: '',
        price:'',
        description: ''
    });
    const handlerInput = (event) => {
        setForms({...forms, [event.target.name]:event.target.value})
    } 
    const newProduct = async(newForms) =>  {
        try{
            const response = await axios.post('http://localhost:3000/api/products/add', newForms);
                    console.log('response -> ', response.data);
        }catch(error){
            console.log('error -> ', error);
            
        }}
    function handlerSubmit(event){
        event.preventDefault();
        const newForms = {
            pname: forms.pname,
            price: forms.price,
            description: forms.description
        }
        newProduct(newForms);
        event.target.reset();
    }
    return(
        <>
            <div className="bg-stone-300 flex h-140 w-full">
                <form action="" onSubmit={handlerSubmit} className=" m-auto rounded-xl shadow-mine h-100 w-78 grid bg-white">

                    {/* <label htmlFor="" className="font-serif text-base text-stone-600 mx-2 " >Image: </label>
                    <input className="mx-2 px-2 font-serif text-base text-stone-600 bg-gray-200 shadow-mine h-7 w-48 rounded-sm hover:scale-103 active:scale-100 transition-transform duration-.3"  type="file" accept="image/png, image/jpeg"/> */}

                    <label className="mx-2 font-serif text-base text-stone-600"  htmlFor="">Product Name: </label>
                    <input className="mx-2 px-2 font-serif text-base text-stone-600 shadow-mine border-gray-500 bg-gray-200 rounded-sm hover:scale-103 active:scale-100 transition-transform duration-.3" name="pname" onChange={handlerInput} type="text" placeholder="Enter your product name"/>

                    <label className="mx-2 font-serif text-base text-stone-600" htmlFor="">Product Price: </label>
                    <input className="mx-2 px-2 font-serif text-base text-stone-600 border-gray-500 shadow-mine bg-gray-200 rounded-sm [&::-webkit-inner-spin-button]:appearance-none hover:scale-103 active:scale-100 transition-transform duration-.3" name='price' onChange={handlerInput} type="number" inputMode="numeric" placeholder="Enter your product price"/>

                    <label className="mx-2 font-serif text-base text-stone-600" htmlFor="">Description: </label>
                    <textarea className="mx-2 px-2 resize-none font-serif text-base text-stone-600 shadow-mine border-gray-500 bg-gray-200 rounded-sm transform hover:scale-103 active:scale-100 transition-transform duration-.3" placeholder="Enter your product description"  name="description" onChange={handlerInput} id=""></textarea>

                   <button className="font-serif text-base border-2 border-transparent bg-gray-200 w-30 text-stone-600 shadow-mine h-10 mx-auto mt-2 transform hover:scale-110 active:scale-90 transition-transform duration-.3 cursor-pointer" type="submit" >Add Products</button> 
                </form> 
            </div>
        </>
    )
}

export default Form