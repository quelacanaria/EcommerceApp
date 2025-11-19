function Form(){
    return(
        <>
            <div className="flex 2xl:border-2 h-120 w-full xl:border-2 lg:border-2 md:border-2 sm:border-2 xs:border-2">
                <form action="" className=" m-auto rounded-xl shadow-2xl h-100 w-78 ">

                    <label htmlFor="" className="font-serif text-base" >Image: </label>
                    <input className="font-serif text-base border-1 border-gray-500 bg-gray-200 w-22 rounded-sm"  type="file" accept="image/png, image/jpeg"/>

                    <label className="font-serif text-base"  htmlFor="">Product Name: </label>
                    <input className="font-serif text-base border-gray-500 bg-gray-200 rounded-sm" type="text" />
                </form>
            </div>
        </>
    )
}

export default Form