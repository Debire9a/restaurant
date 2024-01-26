import Events from "./Event";

const Products = ({productitems,deletenow}) => {
    console.table(productitems);
    return(
        <div>
            <h1 style={{marginLeft:"40%",marginBottom:"0%"}}>List Of Products</h1>
            {
                productitems.map(function(item,key){
                    return(
                        <div>{Events}</div>,
                        <div key={item.id} style={{border:"1px ridge white",margin:"0% 20% 5%",padding:"6px"}}>
                            <h1>{item.product}</h1>
                            <p>{item.number}</p>
                            <button onClick={()=>{deletenow(item.id)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products