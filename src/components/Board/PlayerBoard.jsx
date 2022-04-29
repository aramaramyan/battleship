import setClass, {setPlayerClass} from "../../helpers/setClass";
import groupArray from "../../helpers/groupArray";
import {ACTION_TYPES} from "../../state/satate";

export default function PlayerBoard({state, dispatch, player}){
 const {player1: {isSetShipsMode}} = state;

 function setShips(id) {
  if(state.player1.isSetShipsMode) {
   dispatch({type: ACTION_TYPES.SET_SHIPS, square: id});
  }
 }

 return (
   <div className={setClass(isSetShipsMode,"set_ships_mode")}>
    <h1>Player {player}</h1>
    {groupArray().map(row => <div key={row} className="row">
     {row.map(square => (
       <div key={square} className="square" onClick={() => setShips(square)}>
        <div className={setPlayerClass(state.player1, square)}/>
       </div>))}
    </div>)}
   </div>
 );
}