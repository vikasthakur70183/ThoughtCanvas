import React from "react";
import BoardContext from "./boardContext";

const BoardContextProvider = ({ children }) => { 
    const [Boards,setBoards]=React.useState([])
    return (
        <BoardContext.Provider value={{Boards,setBoards}}>
            {children}
        </BoardContext.Provider>
    )
} 
export default BoardContextProvider