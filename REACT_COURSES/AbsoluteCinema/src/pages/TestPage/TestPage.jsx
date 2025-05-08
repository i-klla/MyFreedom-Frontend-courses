import { useEffect, useState } from "react"

function TestPage() {
    const[counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('USE EFFECT')
    } )

    function increaseCounter() {
        setCounter(counter + 1)
    }

    return (
        <>
            <h1>Test Page</h1>
            <h2>Counter: {counter}</h2>
            <button onClick={increaseCounter}>Increase counter</button>
        </>
    )
}

export default TestPage
