import React from 'react'

export default function NumeroAleatorio(props) {
    // const min = props.min
    // const max = props.max

    const {min, max} = props
    let num = Math.floor(Math.random() * (max - min) + min)

    return(
        <div id='numAle'>
            <h1>Número aleatório: {num}</h1>
        </div>
    )
}