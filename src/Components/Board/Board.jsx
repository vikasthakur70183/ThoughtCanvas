import { useContext} from "react";
import BoardsList from "./BoardsList/BoardsList.jsx"
import CreateBoard from "./CreateBoard/CreateBoard.jsx"
import BoardContext from "../../context/boardContext.js";

const Board = () => {
    const { Boards, setBoards } = useContext(BoardContext);
    const addBoard = (text) => {
        setBoards([...Boards, { id: Boards.length + 1, text, posts: [] }]);
    };

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

