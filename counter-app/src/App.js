import Counter from "./components/counter"
import React from "react"

function App() {
  const [counter, setCounter] = React.useState(1)
  const [showAlert, setShowAlert] = React.useState(false)
  const checkCounter = (val, cb) => {
    console.log(val)
    if (val >= 1 && val <= 10){
      setShowAlert(false)
      cb()
    } else {
      setShowAlert(true)
    }
  }
  const decrement = () => {
    const newVal = counter - 1
    checkCounter(newVal, () => {
      setCounter(newVal)
    })
  }
  const increment = () => {
    const newVal = counter + 1
    checkCounter(newVal, () => {
      setCounter(newVal)
    })
  }
  return (
    <div className="wrapper">
      {showAlert && <div className="alert">Min/Max exceeded</div>}
      <div className="inner-wrapper">
        <button onClick={decrement} className="button">-</button>
        <Counter>{counter}</Counter>
        <button onClick={increment} className="button">+</button>
      </div>
    </div>
  )
}

export default App