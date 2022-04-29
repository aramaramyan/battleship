import PlayerBoard from "../Board/PlayerBoard";
import OpponentBoard from "../Board/OpponentBoard";
import {useGameContext} from "../../Context";
import {ACTION_TYPES} from "../../state/satate";

export default function Player({ playerID }) {
  const { state: { turn, [playerID]: { ships } }, dispatch } = useGameContext();

  const opponentID = playerID === "player1"? "player2" : "player1";

  function setSetShipsMode() {
    dispatch({type: ACTION_TYPES.SET_SET_SHIPS_MODE, playerID});
  }

  return (
    <div>
      <PlayerBoard playerID={playerID} />
      <button onClick={setSetShipsMode}>Set Ships</button>
      <button disabled={!(ships.size === 20)}>Start Game</button>
      <OpponentBoard opponentID={opponentID} playerID={playerID} />
    </div>
  );
}