function Test({num, setNumber}) { // диструкторизировали
    console.log(num)

    function decreaseNumber() {
        setNumber(num - 1)

    }

    return (
        <>
            <h1>Число: {num}</h1>
            <button onClick={decreaseNumber}>Decrease number</button>
        </>
    )
}

export default Test
