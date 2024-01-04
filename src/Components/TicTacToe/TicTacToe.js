import { useState } from "react";

import './TicTacToe.css';

function TicTacToe() {
    const [currentSymbol, setCurrentSymbol] = useState('X');
    const [board, setBoard] = useState(Array(9).fill('1'));

    /**
     * Carries out the logic to handle the current player making a move on the given tile
     * @param {*} tile that the player selected to make a move on
     */
    function handleMove(tile) {
        if(!board[tile]) {
            let nextBoard = board.splice();

            // Update board
            nextBoard[tile] = currentSymbol;
            setBoard(nextBoard);

            // Check if there is a winner - if so, update board to indicate
            checkWin(currentSymbol);

            // Update current player (by symbol)
            const nextSymbol = currentSymbol === 'X' ? 'O' : 'X';
            setCurrentSymbol(nextSymbol);
        }
    }

    /**
     * Checks if the resulting move the player of the given symbol just made results in a win for them
     * @param {*} symbol of the player who made a move
     */
    function checkWin(symbol) {
        // Check rows and columns
        for(let row = 0; row < 3; row++) {
            let rowStart = 3 * row;
            if((board[rowStart] === symbol && board[rowStart + 1] === symbol && board[rowStart + 2] === symbol) // ith row check
            || (board[row] === symbol && board[row + 3] === symbol && board[row + 6] === symbol) // ith column check
            ) {
                handleWin(symbol);
            }
        }

        // Check diagonals
        if((board[0] === symbol && board[4] === symbol && board[8] === symbol)
        || (board[2] === symbol && board[4] === symbol && board[6] === symbol)
        ) {
            handleWin(symbol);
        }
    }

    /**
     * Handles when the given player (represented by their symbol) is determined to have won
     * @param {*} symbol of the player who won
     */
    function handleWin(symbol) {
        alert(symbol + ' wins!');
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
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <table style={{width: 'auto'}}>
                            <tbody>
                                <tr>
                                    <td className='tile' onClick={() => handleMove(0)}>{board[0]}</td>
                                    <td className='tile' onClick={() => handleMove(1)}>{board[1]}</td>
                                    <td className='tile' onClick={() => handleMove(2)}>{board[2]}</td>
                                </tr>
                                <tr>
                                    <td className='tile' onClick={() => handleMove(3)}>{board[3]}</td>
                                    <td className='tile' onClick={() => handleMove(4)}>{board[4]}</td>
                                    <td className='tile' onClick={() => handleMove(5)}>{board[5]}</td>
                                </tr>
                                <tr>
                                    <td className='tile' onClick={() => handleMove(6)}>{board[6]}</td>
                                    <td className='tile' onClick={() => handleMove(7)}>{board[7]}</td>
                                    <td className='tile' onClick={() => handleMove(8)}>{board[8]}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default TicTacToe;