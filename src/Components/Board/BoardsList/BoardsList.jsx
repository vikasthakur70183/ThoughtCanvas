import { useNavigate } from 'react-router-dom';
import './BoardsList.css'
const BoardsList = ({ Boards, deleteBoards }) => {
    const navigate = useNavigate();
    const handleclick=()=>{
        navigate('/Posts');
    }
    return (
        
        <div className='Board'>
            <h1 className='Heading'>Boards</h1>
            <div className='Boards'>
                {
                    Boards.map((item, index) => (
                        <div className="item" key={index}>
                            <p>{item.text}</p>
                            <button className='btn' onClick={handleclick}>btn</button>
                            <button className='btn' id="delete" onClick={() => { deleteBoards(item.id) }}>delete</button>
                        </div>
                    ))
                }
            </div>
        </div>)
}
export default BoardsList;