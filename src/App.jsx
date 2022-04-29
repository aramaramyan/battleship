import {Provider} from "./Context";
import Player from "./components/Player/Player";
import './App.css';

function App() {
  return (
    <Provider>
      <Player playerID = "player1"/>
      <Player playerID = "player2"/>
    </Provider>
  );
}

export default App;
