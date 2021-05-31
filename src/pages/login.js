import React from 'react';
import '../App.css';

function App() {
  return (
    <form>
        <label>
            email:
            <input type='text' placeholder='Digite seu email' />
        </label>
        <label>
            senha:
            <input type='password' placeholder='Digite sua senha' />
        </label>
        <button>Enviar</button>
    </form>
  );
}

export default App;
