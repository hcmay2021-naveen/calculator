import {useState} from 'react'
import './App.css';
import * as math from 'mathjs'
import Buttons from './Components/Buttons';
import Input from './Components/Input'
const App = ()=>{
  const [text,setText] = useState('')
  const[result,setResult] = useState('')
  const addToText = (val) =>{
    setText((text)=>[...text,val+''])
  }
  const reset = ()=>{
    setText ('')
    setResult ( '')
  }
  const calculateResult = ()=>{
    const input = text.join('')
    setResult(math.evaluate(input))
  }
  
 const eqaulbuttonColor = 'green'
  const buttonColor = '#ff8000';
  return (
    <div className="App">
     <div className="calc">
      <Input text={text} result={result}/>
       <div className='row'>
          <Buttons symbol='7'handleClick={addToText}/>
          <Buttons symbol="8" handleClick={addToText}/>
          <Buttons symbol="9" handleClick={addToText}/>
          <Buttons symbol="÷" color={buttonColor} handleClick={addToText}/>
       </div>
       <div className='row'>
          <Buttons symbol="4" handleClick={addToText}/>
          <Buttons symbol="5" handleClick={addToText}/>
          <Buttons symbol="6" handleClick={addToText}/>
          <Buttons symbol="*" color={buttonColor} handleClick={addToText} />
       </div>
       <div className='row'>
          <Buttons symbol="1" handleClick={addToText} />
          <Buttons symbol="2" handleClick={addToText}/>
          <Buttons symbol="3" handleClick={addToText}/>
          <Buttons symbol="+" color={buttonColor} handleClick={addToText}/>
       </div>
       <div className='row'>
          <Buttons symbol="0" handleClick={addToText}/>
          <Buttons symbol="." handleClick={addToText}/>
          <Buttons symbol="=" handleClick={calculateResult} color={eqaulbuttonColor}/>
          <Buttons symbol="-" color={buttonColor} handleClick={addToText}/>
       </div>
       <div className='row'>
      <Buttons symbol="clear" color='red' handleClick={reset}/>
      
      
      </div>
     </div>
    </div>
  );
}
export default App;





