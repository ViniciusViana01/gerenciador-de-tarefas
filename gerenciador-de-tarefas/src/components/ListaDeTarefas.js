import React, { useContext } from 'react';
import Tarefa from './Tarefa';
import { TarefasContext } from '../context/TarefasContext';

function ListaDeTarefas() {
  const { state } = useContext(TarefasContext);

  const tarefasFiltradas = state.filtro === 'todas'
    ? state.tarefas
    : state.tarefas.filter(tarefa =>
        state.filtro === 'concluidas' ? tarefa.concluida : !tarefa.concluida
      );

  return (
    <div>
      {tarefasFiltradas.map(tarefa => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </div>
  );
}

export default ListaDeTarefas;