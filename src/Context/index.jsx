import {createContext, useContext, useReducer} from "react";
import {defaultState, reducer} from "../state/satate";

const Context = createContext(defaultState);

function useGameContext() {
  return useContext(Context);
}

function Provider({children}) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  );
}

export {Provider, useGameContext};