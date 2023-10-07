import { useEffect, useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { WinnerModal } from "./components/WinnerModal";
import { checkEndGame, checkWinnerFrom} from "./logic/board";
import { saveGameStorage, resetGameStorage } from "./logic/storage";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  //null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
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
    //Guardar partida
    saveGameStorage({
      board: newBoard,
      turn: newTurn
    })
    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner) // Actualiza el estado, la actualizacion del estado es asincrono
    } else if(checkEndGame(newBoard)){
      setWinner(false) //empate
    }
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
              updateBoard={() => updateBoard(index)}
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

      <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  );
}

export default App;
