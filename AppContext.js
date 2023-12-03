// 1. Create a context file (e.g., AppContext.js)

import React, { createContext, useReducer, useContext } from "react";

// Initial state
const initialState = {
  count: 0,
};

const lessonCollectionState = [
  {
    id: 1,
    date: null, // initial value for date
    club: null, // initial value for club
    individualOrGroup: null, // initial value for individualOrGroup
    clients: [], // initial value for clients as an array
    duration: null, // initial value for duration
    horseName: null, // initial value for horseName
    cost: null, // initial value for cost
  },
  // Add more lessons as needed
  {
    id: 2,
    date: null,
    club: null,
    individualOrGroup: null,
    clients: [],
    duration: null,
    horseName: null,
    cost: null,
  },
];

// Create a context
const AppContext = createContext();

// Create a reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const appReducerLessonType = (state, action) => {
  switch (action.type) {
    case "UPDATE_LESSON":
      return { ...state, ...action.payload };
    case "ADD_LESSON":
      return [...state, action.payload];
    // Add other cases as needed
    default:
      return state;
  }
};

// Create a context provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [lessonState, lessonDispatch] = useReducer(
    appReducerLessonType,
    lessonCollectionState
  );

  return (
    <AppContext.Provider
      value={{ state, dispatch, lessonState, lessonDispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook for using the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
