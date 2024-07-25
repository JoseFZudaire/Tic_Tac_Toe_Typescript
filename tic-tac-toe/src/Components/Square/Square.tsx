import React, {useState} from "react";

export const Square = ({value, setValue, key}:{value: null | string, setValue: () => void, key: number}) => {
    return (
        <div className="square">
            <button style={{height:"80px", width: "80px"}} onClick={setValue}>
                {value}
            </button>
        </div>
    )
}