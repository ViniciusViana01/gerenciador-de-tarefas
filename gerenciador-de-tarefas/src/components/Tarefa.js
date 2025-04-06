import React, { useContext } from 'react';
import { TarefasContext } from '../context/TarefasContext';

function Tarefa({ tarefa }) {
  const { dispatch } = useContext(TarefasContext);

  const handleConcluir = () => {
    dispatch({ type: 'CONCLUIR_TAREFA', payload: tarefa.id });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={handleConcluir}
      />
      <span>{tarefa.texto}</span>
    </div>
  );
}

export default Tarefa;