import groupArray from "./helpers/groupArray";
import './App.css';
import {useReducer} from "react";
import {ACTION_TYPES, defaultState, reducer} from "./state/satate";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  function setShips() {
    dispatch({type:ACTION_TYPES.SET_SET_SHIPS_MODE});
  }
  return (
    <div className={`${state.player1.isSetShipsMode? "set_ships_mode" : ""}`}>
      {groupArray().map(row => <div className="row">
        {row.map(square => <div className="square"></div>)}
      </div>)}
      <button onClick={setShips}>Set Ships</button>
    </div>
  );
}

export default App;
