import React, { useContext } from 'react';
import { TarefasContext } from '../context/TarefasContext';

function FiltroTarefas() {
  const { dispatch } = useContext(TarefasContext);

  const handleFiltrarTodas = () => {
    dispatch({ type: 'FILTRAR_TAREFAS', payload: 'todas' });
  };

  const handleFiltrarConcluidas = () => {
    dispatch({ type: 'FILTRAR_TAREFAS', payload: 'concluidas' });
  };

  const handleFiltrarPendentes = () => {
    dispatch({ type: 'FILTRAR_TAREFAS', payload: 'pendentes' });
  };

  return (
    <div>
      <button onClick={handleFiltrarTodas}>Todas</button>
      <button onClick={handleFiltrarConcluidas}>Concluídas</button>
      <button onClick={handleFiltrarPendentes}>Pendentes</button>
    </div>
  );
}

export default FiltroTarefas;