import setClass, {setOpponentClass} from "../../helpers/setClass";
import groupArray from "../../helpers/groupArray";
import {ACTION_TYPES} from "../../state/satate";
import {useGameContext} from "../../Context";

export default function OpponentBoard({player}){
  const {state, dispatch} = useGameContext();

  const playerID = player === "player1"? "player2" : "player1";

  const {[playerID]: {isSetShipsMode, ships}} = state;

  function hitShip(id) {
    if(state[playerID].ships.has(id)) {
      dispatch({type: ACTION_TYPES.SET_BEATEN, id});
    } else {
      dispatch({type: ACTION_TYPES.SET_PASS, id});
    }
  }

  return (
    <div className={setClass(isSetShipsMode,"set_ships_mode")}>
      <h1>Player {playerID}</h1>
      {groupArray().map(row => <div key={row} className="row">
        {row.map(square => (
          <div key={square} className="square" onClick={() => hitShip(square)}>
            <div className={setOpponentClass(state[playerID], square)} />
          </div>))}
      </div>)}
    </div>
  );
}