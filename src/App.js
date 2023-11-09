import React from 'react'
import NumeroAleatorio from './components/NumeroAleatorio';
import Exemplo03 from './components/Exemplo03'
import Exemplo02 from './components/Exemplo02';
import Exemplo01 from './components/Exemplo01';

function App() {
  return (
    <div>
      <Exemplo01 nome = "leort"/> 
      {/* <Exemplo02 aluno = "José" media = "6.5"/>
      <Exemplo03 nome = "Samara" peso = {62} altura = {1.7}/>  */}
      <NumeroAleatorio min = {20} max = {49} />
    </div>
  )
}

export default App;
