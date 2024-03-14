import { useState } from 'react';
import './CreateBoard.css'
const CreateBoard = ({ addBoard }) => {
    const [getText, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addBoard(getText);
        setText(" ");
    }

    return (
        <>
            <div className="Form-Div" onSubmit={handleSubmit}>
                <form action="" className="Form">
                    Enter New Board Name:
                    <input value={getText} onChange={e => setText(e.target.value)} type="text" />
                    <button>Create</button>
                </form>
            </div>
        </>)
}
export default CreateBoard;