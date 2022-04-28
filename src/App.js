import './App.css';

const board = Array.from(Array(100).keys());
const grouping = board.reduce((acc, item, index) => {
  const currentIndex = index % 10;
  (acc[currentIndex] = acc[currentIndex] || []).push(item);
  return acc;
}, []);

function App() {
  return (
    <>
      {grouping.map(row => <div className="row">
        {row.map(square => <div className="square"></div>)}
      </div>)}
    </>
  );
}

export default App;
