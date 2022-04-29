import PlayerBoard from "../Board/PlayerBoard";
import OpponentBoard from "../Board/OpponentBoard";
import {useGameContext} from "../../Context";
import {ACTION_TYPES} from "../../state/satate";

export default function Player({playerID}) {
  const {state, dispatch} = useGameContext();


  function setSetShipsMode() {
    dispatch({type: ACTION_TYPES.SET_SET_SHIPS_MODE});
  }

  return (
    <div>
      <PlayerBoard state={state} dispatch={dispatch} player={playerID}/>
      <button onClick={setSetShipsMode}>Set Ships</button>
      <OpponentBoard state={state} dispatch={dispatch} player={playerID}/>
    </div>
  );
}