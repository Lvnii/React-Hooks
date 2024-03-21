import { useEffect, useState, useMemo } from "react"

const Test = (props) => {
    const {numberOne, numberTwo} = props

    const sum = useMemo(() => {
        return numberOne + numberTwo
    }, [numberOne, numberTwo])

    useEffect(() => {
        if (numberOne + numberTwo === 10) {
            console.log("send request!")
        }

    }, [numberOne, numberTwo])

    useEffect(() => {
        if (numberOne + numberTwo === 15) {
            console.log("send another request!")
        }
    }, [sum])

    return (
        <p>{numberOne + numberTwo}</p>
    )
}

export default Test;