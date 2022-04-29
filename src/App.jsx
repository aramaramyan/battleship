import {useReducer} from "react";
import {ACTION_TYPES, defaultState, reducer} from "./state/satate";
import PlayerBoard from "./components/Board/PlayerBoard";
import OpponentBoard from "./components/Board/OpponentBoard";
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  function setSetShipsMode() {
    dispatch({type: ACTION_TYPES.SET_SET_SHIPS_MODE});
  }

  return (
    <>
      <PlayerBoard state={state} dispatch={dispatch} player={1}/>
      <button onClick={setSetShipsMode}>Set Ships</button>
      <OpponentBoard state={state} dispatch={dispatch} player={2}/>
    </>
  );
}

export default App;
