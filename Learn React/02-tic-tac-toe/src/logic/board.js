import { WINNER_COMBOS} from "../constants"


export const checkWinnerFrom = (boardToCheck) => {
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

  export const checkEndGame = (newBoard) =>{
    //Originalment el trablero esta lleno de null, significa que cuando no haya ningun null
    // y ademas no haya ningun ganador, significa que se acabo el juego en empate.
    // newBoard = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null']
    return newBoard.every((square) => square !== null)
  }

