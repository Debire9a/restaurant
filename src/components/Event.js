const Events = () => {
    const btnStyle = {
        width:"100px",
        height:"50px",
        backgroundColor:"red",
        color: "blue"
    }
    function handleClick(){
        alert("Clicked")
    }
    return (
        <div>
            <button onClick={handleClick} style={btnStyle}>Click Me</button>
        </div>
    )
}
export default Events