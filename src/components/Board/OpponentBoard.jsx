import setClass, {setOpponentClass} from "../../helpers/setClass";
import groupArray from "../../helpers/groupArray";
import {ACTION_TYPES} from "../../state/satate";

export default function OpponentBoard({state, dispatch, player}){
  const {player1: {isSetShipsMode, ships}} = state;

  function hitShip(id) {
    if(state.player1.ships.has(id)) {
      dispatch({type: ACTION_TYPES.SET_BEATEN, id});
    } else {
      dispatch({type: ACTION_TYPES.SET_PASS, id});
    }
  }

  return (
    <div className={setClass(isSetShipsMode,"set_ships_mode")}>
      <h1>Player {player}</h1>
      {groupArray().map(row => <div key={row} className="row">
        {row.map(square => (
          <div key={square} className="square" onClick={() => hitShip(square)}>
            <div className={setOpponentClass(state.player1, square)} />
          </div>))}
      </div>)}
    </div>
  );
}