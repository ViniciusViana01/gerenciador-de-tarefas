import React, { createContext, useReducer } from 'react';

const initialState = {
  tarefas: [],
  filtro: 'todas',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADICIONAR_TAREFA':
      return {
        ...state,
        tarefas: [...state.tarefas, { id: Date.now(), texto: action.payload, concluida: false }],
      };
    case 'CONCLUIR_TAREFA':
      return {
        ...state,
        tarefas: state.tarefas.map((tarefa) =>
          tarefa.id === action.payload ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        ),
      };
    case 'FILTRAR_TAREFAS':
      return {
        ...state,
        filtro: action.payload,
      };
    default:
      return state;
  }
};

export const TarefasContext = createContext();

export const TarefasProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TarefasContext.Provider value={{ state, dispatch }}>
      {children}
    </TarefasContext.Provider>
  );
};