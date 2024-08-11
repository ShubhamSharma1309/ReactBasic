import { useState } from "react";



function App() {

  const [counter , setCounter] = useState(0);  // useState return karta hai ek variable and ek function,, and jo v pass karte hai usestate mai vo variable mai set hojata hai...

  const addNumber = () => {
    if(counter<20){
      setCounter(counter+1);
    }
  }
  const deleteNumber = () => {
    if(counter>-20){
      setCounter(counter-1);
    }
  }
  const resetNumber = () => {
    setCounter(0);
  }
  return (
    <div>
      <h1>click on ADD to increase and Substract to decrease</h1>
      <h2>Counter Value : {counter}</h2>
      <div>
        <button onClick={addNumber}>Add</button>
      </div>
      <div>
        <button onClick={deleteNumber}>Subtract</button>
      </div>
      <div>
        <button onClick={resetNumber}>Reset</button>
      </div>
    </div>
  )
}

export default App
