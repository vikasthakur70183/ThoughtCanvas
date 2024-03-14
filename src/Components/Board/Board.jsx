import { useState } from "react";
import BoardsList from "./BoardsList/BoardsList.jsx"
import CreateBoard from "./CreateBoard/CreateBoard.jsx"

const Board = () => {
    const [Boards, setBoards] = useState([]);

    const addBoard = (text) => {
        console.log(Boards);
        setBoards([...Boards, { id: Boards.length + 1, text }]);
        console.log(Boards);

    }
    const deleteBoards = (id) => {
        setBoards(Boards.filter((item) => item.id !== id))
    }
    return (
        <>
            <CreateBoard addBoard={addBoard} />
            <div>
                <BoardsList Boards={Boards} deleteBoards={deleteBoards} />
            </div>
        </>
    )
}
export default Board

