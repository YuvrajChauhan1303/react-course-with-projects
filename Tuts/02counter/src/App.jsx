import { useState } from "react"
import "./app.css"

const App = () => {

  let [counter, setCounter] = useState(15);

  const addCounter = () =>{
    setCounter(counter + 1);
  }

  const removeCounter = () =>{
    setCounter(counter - 1);
  }

  return (
    <div className="main">
      <h1>Counter: {counter}</h1>
      <div className="buttons">
      <button className="add"
        onClick={addCounter}
      >Add</button>
      <button className="remove"
        onClick={removeCounter}
      >Remove</button>
      </div>
    </div>
  )
}

export default App
