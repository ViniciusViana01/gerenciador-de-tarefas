import React, { useState, useContext } from 'react';
import ListaDeTarefas from './components/ListaDeTarefas';
import FiltroTarefas from './components/FiltroTarefas';
import { TarefasContext } from './context/TarefasContext';

function App() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const { dispatch } = useContext(TarefasContext);

  const handleInputChange = (event) => {
    setNovaTarefa(event.target.value);
  };

  const handleAdicionarTarefa = () => {
    if (novaTarefa.trim()) {
      dispatch({ type: 'ADICIONAR_TAREFA', payload: novaTarefa });
      setNovaTarefa('');
    }
  };

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <div>
        <input
          type="text"
          placeholder="Adicionar nova tarefa"
          value={novaTarefa}
          onChange={handleInputChange}
        />
        <button onClick={handleAdicionarTarefa}>Adicionar</button>
      </div>
      <FiltroTarefas />
      <ListaDeTarefas />
    </div>
  );
}

export default App;