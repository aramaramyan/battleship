import {Provider} from "./Context";
import PlayerBoard from "./components/Board/PlayerBoard";
import OpponentBoard from "./components/Board/OpponentBoard";
import './App.css';

function App() {
  return (
    <Provider>
      <PlayerBoard player={1} />
      <OpponentBoard player={2}/>
    </Provider>
  );
}

export default App;
