import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  users: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeTask = (id) => {
    dispatch({
      type: 'REMOVE_TASK',
      payload: id
    })
  }

  const addTask = (user) => {
    dispatch({
      type: 'ADD_TASK',
      payload: user
    })
  }

  const editTask = (user) => {
    dispatch({
      type: 'EDIT_TASK',
      payload: user
    })
  }

  return (
    <GlobalContext.Provider value={{
      users: state.users,
      removeTask,
      addTask,
      editTask
    }}>
      {children}
    </GlobalContext.Provider>
  )
}