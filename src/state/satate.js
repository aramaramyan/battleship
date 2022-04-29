export const ACTION_TYPES = {
  SET_SHIPS: "SET_SHIPS",
  SET_BEATEN: "SET_BEATEN",
  SET_PASS: "SET_BEATEN",
  SET_SET_SHIPS_MODE: "SET_SET_SHIPS_MODE"
};

export const defaultState = {
  player1:{
    isSetShipsMode: false,
    ships: new Set(),
    beaten: new Set(),
    pass: new Set(),
  },
  player2:{
    isSetShipsMode: false,
    ships: new Set(),
    beaten: new Set(),
    pass: new Set(),},
  turn: "player1",
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_SET_SHIPS_MODE: {
      return {...state, player1: {...state.player1, isSetShipsMode: !state.player1.isSetShipsMode}};
    }
    case ACTION_TYPES.SET_SHIPS: {
      let newShips = new Set([...state.player1.ships]);
      if(newShips.has(action.square)){
        newShips.delete(action.square)
      } else {
        newShips.add(action.square);
      }
      return {...state, player1: {...state.player1, ships: newShips}};
    }
    case ACTION_TYPES.SET_BEATEN: {
      let newBeaten = new Set([...state.player1.beaten]);
      newBeaten.add(action.id);
      return {...state, player1: {...state.player1, beaten: newBeaten}};
    }
    case ACTION_TYPES.SET_PASS: {
      let newPass = new Set([...state.player1.pass]);
      newPass.add(action.id);
      return {...state, player1: {...state.player1, pass: newPass}};
    }
  }
}