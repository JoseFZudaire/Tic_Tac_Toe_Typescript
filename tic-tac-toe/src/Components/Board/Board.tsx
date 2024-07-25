import React, {useState, useEffect} from "react";
import {Square} from "../Square/Square.tsx";
 
export const Board = () => {
    const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
    const [currentPlayer, setPlayer] = useState<"X" | "O">("X");
    const [gameStatus, setGameStatus] = useState<string>("");

    function reset() {
        setSquares(Array(9).fill(""));
        setGameStatus("");
    }

    useEffect(
        () => setGameStatus(calculateWinner())
    , [currentPlayer]);

    function calculateWinner() {
        for(var i = 0; i < 3; i++) {
            if(squares[i] != "") {
                if((squares[i] == squares[i+3])&&(squares[i] == squares[i+6])) {
                    return "Winner is " + squares[i];
                }
                if((squares[i] == squares[i+1])&&(squares[i] == squares[i+2])) {
                    return "Winner is " + squares[i];
                } else if((squares[i+3] == squares[i+4])&&(squares[i] == squares[i+5])) {
                    return "Winner is " + squares[i+3];
                } else if((squares[i+6] == squares[i+7])&&(squares[i] == squares[i+8])) {
                    return "Winner is " + squares[i+6];
                }
                if(i == 0) {
                    if((squares[i] == squares[i+4])&&(squares[i] == squares[i+8])) {
                        return "Winner is " + squares[i];
                    }
                }
                if(i == 2) {
                    if((squares[i] == squares[i+2])&&(squares[i] == squares[i+2])) {
                        return "Winner is " + squares[i];
                    }
                }                
            }
        }
        return "Current player is: " + currentPlayer;
    }

    function setSquareValue (i: number) {
        if(squares[i] == "") {
            var arr_squares = squares;
            if(currentPlayer == "X") {
                arr_squares[i] = "O";
                setPlayer("O");
            } else {
                arr_squares[i] = "X";
                setPlayer("X");
            }
            setSquares(arr_squares);
        }
    }

    return(<>
        {"Tic-tac-toe:"}
        <div style={{width: "250px", height: "250px", flexWrap: "wrap", display: "flex"}}>
            {Array(9).fill(null).map((el,i) => {
                return(<Square key={i} value={squares[i]} setValue={() => {setSquareValue(i)}}/>)
            })}
        </div>
        <div>
            {gameStatus}
        </div>
        <button style={{width: "80px", height: "40px"}} onClick={reset}>Reset</button>
    </>)
}
