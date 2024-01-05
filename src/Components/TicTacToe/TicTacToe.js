import { useState } from "react";

import './TicTacToe.css';

function TicTacToe() {
    const emptySymbol = 'Z'; // Janky solution but works quite nicely for a quick-and-dirty little project thing like this
    const [currentSymbol, setCurrentSymbol] = useState('X');
    const [board, setBoard] = useState(Array(9).fill(emptySymbol));

    const [winnerText, setWinnerText] = useState('');

    /**
     * Carries out the logic to handle the current player making a move on the given tile
     * @param {*} tile that the player selected to make a move on
     */
    function handleMove(tile) {
        if(board[tile] === emptySymbol) {
            // Update board
            let nextBoard = board.map((tileSymbol, tileIdx) => {
                if(tileIdx === tile) return currentSymbol;
                else return tileSymbol;
            });
            setBoard(nextBoard);

            // Update current player (by symbol)
            const playerSymbol = currentSymbol;
            const nextSymbol = currentSymbol === 'X' ? 'O' : currentSymbol === 'O' ? 'X' : '';
            setCurrentSymbol(nextSymbol);

            // Check if there is a winner - if so, update board to indicate
            checkWin(playerSymbol, nextBoard);
        }
    }

    /**
     * Checks if the resulting move the player of the given symbol just made results in a win for them
     * @param {*} symbol of the player who made a move
     */
    function checkWin(symbol, nextBoard) {
        // Check rows and columns
        for(let row = 0; row < 3; row++) {
            let rowStart = 3 * row;
            if((nextBoard[rowStart] === symbol && nextBoard[rowStart + 1] === symbol && nextBoard[rowStart + 2] === symbol) // ith row check
            || (nextBoard[row] === symbol && nextBoard[row + 3] === symbol && nextBoard[row + 6] === symbol) // ith column check
            ) {
                handleWin(symbol);
                return;
            }
        }

        // Check diagonals
        if((nextBoard[0] === symbol && nextBoard[4] === symbol && nextBoard[8] === symbol)
        || (nextBoard[2] === symbol && nextBoard[4] === symbol && nextBoard[6] === symbol)
        ) {
            handleWin(symbol);
            return;
        }

        // Check if draw
        if(!nextBoard.some(tile => tile === 'Z')) {
            handleDraw();
        }
    }

    /**
     * Handles when the given player (represented by their symbol) is determined to have won
     * @param {*} symbol of the player who won
     */
    function handleWin(symbol) {
        setWinnerText('Player ' + symbol + ' wins!');
    }

    /**
     * Handles when a draw is detected, the board is filled and no more moves can be made
     */
    function handleDraw() {
        setCurrentSymbol('');
        setWinnerText('Draw!')
    }

    return (
    <div className='bg-main'>
        <div className="bg-bold">
            <div className='container'>
                <h1>Tic-Tac-Toe</h1>
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-4 my-auto'>
                    <p>
                        Tic-Tac-Toe [For One &lt;3]. Try to beat yourself. (would that be winning or drawing?)
                    </p>
                </div>
                <div className='col-8'>
                    <div className='row'>
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                            <   span className='winner-text'>{winnerText && currentSymbol ? 'Winner!' : ''}</span>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <span className={`winner-text player-winner-text ${winnerText && currentSymbol === 'O' ? 'tile-player-one' : winnerText && currentSymbol === 'X' ? 'tile-player-two' : winnerText ? 'draw-text' : ''}`}>{winnerText}</span>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                                <table className='table' style={{width: 'auto'}}>
                                    <tbody>
                                        <tr>
                                            <td className={`tile ${board[0] === 'X' ? 'tile-player-one' : board[0] === 'O' ? 'tile-player-two' : ''}`} onClick={() => handleMove(0)}>{board[0]}</td>
                                            <td className={`tile ${board[1] === 'X' ? 'tile-player-one' : board[1] === 'O' ? 'tile-player-two' : ''}`} onClick={() => handleMove(1)}>{board[1]}</td>
                                            <td className={`tile tile-end ${board[2] === 'X' ? 'tile-player-one' : board[2] === 'O' ? 'tile-player-two' : ''}`} onClick={() => handleMove(2)}>{board[2]}</td>
                                        </tr>
                                        <tr>
                                            <td className={`tile ${board[3] === 'X' ? 'tile-player-one' : board[3] === 'O' ? 'tile-player-two' : ''}`} onClick={() => handleMove(3)}>{board[3]}</td>
                                            <td className={`tile ${board[4] === 'X' ? 'tile-player-one' : board[4] === 'O' ? 'tile-player-two' : ''}`} onClick={() => handleMove(4)}>{board[4]}</td>
                                            <td className={`tile tile-end ${board[5] === 'X' ? 'tile-player-one' : board[5] === 'O' ? 'tile-player-two' : ''}`} onClick={() => handleMove(5)}>{board[5]}</td>
                                        </tr>
                                        <tr>
                                            <td className={`tile tile-bottom ${board[6] === 'X' ? 'tile-player-one' : board[6] === 'O' ? 'tile-player-two' : ''}`} onClick={() => handleMove(6)}>{board[6]}</td>
                                            <td className={`tile tile-bottom ${board[7] === 'X' ? 'tile-player-one' : board[7] === 'O' ? 'tile-player-two' : ''}`} onClick={() => handleMove(7)}>{board[7]}</td>
                                            <td className={`tile tile-bottom tile-end ${board[8] === 'X' ? 'tile-player-one' : board[8] === 'O' ? 'tile-player-two' : ''}`} onClick={() => handleMove(8)}>{board[8]}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default TicTacToe;