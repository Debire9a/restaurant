import { createContext, useContext, useState } from "react";


// Create a context

const productContext = createContext([]);

// Create a context provider component

const ProductProvider = ({children}) => {
//  The state

const [products,setProducts] = useState([]);

// Function 


// function to add

const addNewProduct = (productDetails) => {

    setProducts([...products,productDetails])

}


// function to delete

const deleteProduct = (proid) =>{

    setProducts(products.filter((prod) => prod.id !== proid))
}

return(
    <productContext.Provider value={{products,addNewProduct,deleteProduct}}>
        {children}
    </productContext.Provider>
)

}


// use context

function useProductContext(){

    const context = useContext(productContext)

    if (!context){
        console.log("To use this context you need product context")
    }

    return context

}





export {ProductProvider,useProductContext}
