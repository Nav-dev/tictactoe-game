import './styles.scss';
import { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext,setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : '0';
  const statusMessage = winner ? `Winner is ${winner}` : `Next player is ${nextPlayer}`;

  const handleSquareClick = clickedposition => {
    if(squares[clickedposition] || winner){
        return;
    }
    setSquares((currentSquares) =>{
        return currentSquares.map((squareValue, position)=>{

            if(clickedposition === position){
                return isXNext ? 'X':'O';
            }
            return squareValue;
        })
    });
    setIsXNext((currentIsXNext)=>!currentIsXNext)
  };

  
  return (
      <div className='app'>
        <h2>{statusMessage}</h2>
        <Board squares={squares} handleSquareClick={handleSquareClick} />
      </div>
    
  );
}

export default App
