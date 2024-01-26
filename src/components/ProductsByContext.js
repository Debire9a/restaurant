import { useProductContext } from "../context/ProductContext";
import Events from "./Event";

const ProductsByContext = ({productitems,deletenow}) => {
    // console.table(productitems);

    const {products,deleteProduct} = useProductContext()
    return(
        <div>
            <h1 style={{marginLeft:"40%",marginBottom:"0%"}}>List Of Products</h1>
            {
                products.map(function(item,key){
                    return(
                        <div>{Events}</div>,
                        <div key={item.id} style={{border:"1px ridge white",margin:"0% 20% 5%",padding:"6px"}}>
                            <h1>{item.product}</h1>
                            <p>{item.number}</p>
                            <button onClick={()=>{deleteProduct(item.id)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductsByContext