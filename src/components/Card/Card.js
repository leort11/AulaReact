import React from 'react';
import "./Card.css";

export default function Card(props) {
    const titulo = props.titulo

    return(
        <div className = "card">
            <div className = "titulo">{titulo}</div>
            <div className = "conteudo">Conteúdo</div>

        </div>
    )
}