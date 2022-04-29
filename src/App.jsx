import {Provider} from "./Context";
import Player from "./components/Player/Player";
import './App.css';

function App() {
  return (
    <div className="game">
      <Provider>
        <div className="players">
          <Player playerID = "player1"/>
          <Player playerID = "player2"/>
        </div>
      </Provider>
    </div>
  );
}

export default App;
