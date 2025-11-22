import React, {useState, useEffect} from 'react'
import axios from 'axios'
function Card(){
        const [data, setData] = useState(null);
    const showDatas = () => { 
        axios.get('http://localhost:3000/api/products/get')
        .then(response => {
            setData(response.data)
            console.log(response.data.data.map(t => t.pname))
             JSON.stringify(data, null)
        })
        .catch(error => console.log(error))
    }
    

    return(
        <>
            <div className="h-50 w-40 rounded-xl shadow-mine mx-1 my-1 bg-white grow max-w-50">
                <p>{}</p>
            </div>
        </>
    )
}

export default Card