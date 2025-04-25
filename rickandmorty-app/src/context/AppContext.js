import { createContext, useReducer, useContext } from 'react';

const AppContext = createContext();

const initialState = {
  likes: {},
  characterLikes: {},
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_LIKE_EPISODE': {
      const current = state.likes[action.id] || 0;
      return { ...state, likes: { ...state.likes, [action.id]: current + action.value } };
    }
    case 'TOGGLE_LIKE_CHARACTER': {
      const current = state.characterLikes[action.id] || 0;
      return { ...state, characterLikes: { ...state.characterLikes, [action.id]: current + action.value } };
    }
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
