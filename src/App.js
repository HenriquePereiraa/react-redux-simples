import './App.css';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Intervalo from './components/Intervalo';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <h2>Exercicio React-Redux(Simples)</h2>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>

      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
