import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";

const TURNS = {
  X: "x",
  O: "o",
};

const Square = ({ children, updateBoard, isSelected, index }) => {
  const className = `square ${isSelected ? 'is-selected': ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return <div onClick={handleClick} className={className}>{children}</div>;
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X)
  //null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) =>{
    //Originalment el trablero esta lleno de null, significa que cuando no haya ningun null
    // y ademas no haya ningun ganador, significa que se acabo el juego en empate.
    // newBoard = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null']
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    //no actualizamos esta posicion si ya tiene algo
    // o ya tiene un ganador
    if(board[index] || winner) return
    //actualizar el tablero 
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard) // asincrono
    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner) // Actualiza el estado, la actualizacion del estado es asincrono
    } else if(checkEndGame(newBoard)){
      setWinner(false) //empate
    }
  }

  const checkWinner = (boardToCheck) => {
    // revisamos todas las combinaciones ganadores
    // para ver si gano x u o 

    //in permite recorrer cada propiedad
    //of permite coger cada elemento
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square 
              key={index} 
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false 
                  ? 'Empate'
                  : 'Gano ' + winner
                }
              </h2>

              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }

    </main>
  );
}

export default App;
