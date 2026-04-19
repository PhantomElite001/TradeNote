import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
  customers: [],
  transactions: [],
  ui: {
    loading: false,
    error: null,
  },
};

// Create context
const GlobalStateContext = createContext(initialState);

// Action types
const SET_CUSTOMERS = 'SET_CUSTOMERS';
const ADD_TRANSACTION = 'ADD_TRANSACTION';
const SET_LOADING = 'SET_LOADING';
const SET_ERROR = 'SET_ERROR';

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_CUSTOMERS:
      return { ...state, customers: action.payload };
    case ADD_TRANSACTION:
      return { ...state, transactions: [...state.transactions, action.payload] };
    case SET_LOADING:
      return { ...state, ui: { ...state.ui, loading: action.payload } };
    case SET_ERROR:
      return { ...state, ui: { ...state.ui, error: action.payload } };
    default:
      return state;
  }
};

// Provider component
export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook for using the global state
export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

// Export action creators
export const setCustomers = (customers) => ({ type: SET_CUSTOMERS, payload: customers });
export const addTransaction = (transaction) => ({ type: ADD_TRANSACTION, payload: transaction });
export const setLoading = (isLoading) => ({ type: SET_LOADING, payload: isLoading });
export const setError = (error) => ({ type: SET_ERROR, payload: error });
