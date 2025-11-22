function Card({name = "Product 1", price = 0, description = "This is a product"}){

    return(
        <>
            <div className="h-50 w-40 rounded-xl shadow-mine mx-1 my-1 bg-white grow max-w-50">
                <p>Name: {name}</p>
                <p>Price: {price}</p>
                <p>Description: {description}</p>
            </div>
        </>
    )
}

export default Card