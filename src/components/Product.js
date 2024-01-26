const Product = (props) => {
    console.log(props);

    return(
        <div>
            <h1>{props.id}</h1>
            <p>{props.product}</p>
            <p>{props.number}</p>
            button
        </div>
    );
};
export default Product;