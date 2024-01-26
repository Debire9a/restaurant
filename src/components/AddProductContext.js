import { useState } from "react"
import { useProductContext } from "../context/ProductContext";

const AddProductContext = ()=> {

    const {addNewProduct} = useProductContext()

    const [data,setData] = useState({
        id:"",
        product:"",
        number:""

    });

    function handleNameChange(e){
        let fieldname = e.target.name
        setData((prev) => {return {...prev,name: e.target.value}})

    }

    function handleProductForm(e){
        e.preventDefault();
        addNewProduct(data);
        
        setData({
            id:"",
            product:"",
            number:""
    
        });


        console.log(data)
    }

    return (
        <div>
          <h1>Add product</h1>
          <form method="post" onSubmit={handleProductForm}>
            <input type="text" name="product" placeholder="product" className="form-control col-12" value={data.product} onChange ={(e) => { setData((prev) => {return {...prev, product: e.target.value}})} }/>
            <input type="number" name="number" placeholder="number"  className="form-control col-12" value={data.number} onChange={(e) => { setData((prev) => {return {...prev, number: e.target.value, id:Math.random() }})} }/>
            <button type="submit" className="btn btn-success col-6">Login now</button>
          </form>
        </div>
    )

}

export default AddProductContext