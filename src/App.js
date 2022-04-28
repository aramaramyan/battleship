import groupArray from "./helpers/groupArray";
import './App.css';
import {useReducer} from "react";
import {ACTION_TYPES, defaultState, reducer} from "./state/satate";
import setClass from "./helpers/setClass";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const {player1: {isSetShipsMode, ships}} = state;

  function setSetShipsMode() {
    dispatch({type:ACTION_TYPES.SET_SET_SHIPS_MODE});
  }

  function setShips(id) {
    if(state.player1.isSetShipsMode) {
      dispatch({type: ACTION_TYPES.SET_SHIPS, square: id});
    }
  }

  return (
    <div className={setClass(isSetShipsMode,"set_ships_mode")}>
      {groupArray().map(row => <div key={row} className="row">
        {row.map(square => (
          <div
            key={square}
            className="square"
            onClick={() => setShips(square)}
          >
            <div className={setClass(ships.has(square), "ship")}/>
          </div>))}
      </div>)}
      <button onClick={setSetShipsMode}>Set Ships</button>
    </div>
  );
}

export default App;
