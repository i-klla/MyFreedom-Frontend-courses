import { useState } from "react"
import Test from './components/Test.jsx'

function App(props) { // props = {}
  const [number, setNumber] = useState(0) 
  console.log(number)

  function increaseNumber() {
    // Состояние State - ассинхронное
    setNumber(number + 1) // 0 + 1 = 1
    setNumber(number + 1) // 0 + 1 = 1
    setNumber(number + 1) // 0 + 1 = 1

    setNumber(prevNumber => prevNumber + 1) // 0 + 1 = 1
    setNumber(prevNumber => prevNumber + 1) // 1 + 1 = 2
    setNumber(prevNumber => prevNumber + 1) // 2 + 1 = 3
  }
  console.log(number)

  return (
    <>
    <h1>Number: {number}</h1>
    <button onClick={increaseNumber}>Increase number</button>
    <Test num={number} setNumber={setNumber}/> {/* props = {num: 0} */}
    </>
  )
}

export default App
