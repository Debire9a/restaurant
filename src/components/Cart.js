import { useState } from "react"

export const Cart = ()=> {

    // useState: Use state to handle a value that changes in our application

    // const[statename,afunctiontoupdate]=useState();

    const[cartItem,setCartItem]=useState(0);


    // let cartItemNo = 0;


    // function handleCart(){
    //     alert("You increased cart items")
    // }

    function handleCart(){
        // alert('You increased th cart items')

        // cartItemNo++
        // console.log(cartItemNo)

        setCartItem((xyz)=> {return xyz = xyz + 1})

        // (prev)=>{return prev=prev+1}
        console.log(cartItem)

    }

    return(
        <div>
            <h1>{ cartItem }</h1>
            <button onClick={handleCart}>Add to cart</button>

        </div>
    )

}

export default Cart