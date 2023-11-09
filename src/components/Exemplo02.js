import React from 'react'

export default function Exemplo02(props) {
            let aluno = props.aluno
            let media = Number(props.media)

            let situacao = ""
            if(media >= 5) {
                situacao ="Aprovado"

            } else {
                situacao = "Reprovado"

            }
        return(
        <div>
            <h1>Segundo Componente</h1>
            <p>
                Seja bem-vindo(a) {aluno}
            </p>
            <p>
                Sua média final é: {media}
            </p>
            <p>
                Situação: {situacao}
            </p>
        </div>
    )
}