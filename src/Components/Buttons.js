import "./Buttons.css"
const Buttons = ({symbol,color,handleClick})=>{
    return(
        <div
           className = "button-wrapper" onClick={() => handleClick(symbol)} style={{backgroundColor:color}}>
           {symbol}
        </div>
    )
}

export default Buttons;