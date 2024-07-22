import Square from "../Square/Square.tsx";
import react, {useState} from "react";


export const Board = () => {
    
    const [squares, setSquares] = useState(Array(9).fill(null));    
    
    return(
        <div className="grid">
            {
                squares.map((el,i) => {return (
                    <Square
                        value={el}
                        key={i}
                    />
                )})
            }
        </div>>
    )
}

