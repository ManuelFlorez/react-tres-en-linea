import Square from "./Square";

export default function Board({xIsNext, squares, onPlay}) {
  
  function handleClick(i) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Ganador: " + winner;
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
  }

  function row(index) {
    return (
      <div className="board-row">
      <Square value={squares[index]} onSquareClick={() => handleClick(index)} />
      <Square value={squares[index + 1]} onSquareClick={() => handleClick(index + 1)} />
      <Square value={squares[index + 2]} onSquareClick={() => handleClick(index + 2)} />
    </div>
    );
  }

  return (
    <>
    <div className="status">{status}</div>
    {row(0)}
    {row(3)}
    {row(6)}
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null;
}