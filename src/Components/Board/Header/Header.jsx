import React, { useState } from 'react';
import './Header.css'
import CreateBoard from '../CreateBoard/CreateBoard';
const Header = () => {
    const HandleCreateBoard = () => {
        SetShowCreateBoard(showCreateBoard => !showCreateBoard);
    }
    return (
        <>
            <header className='Header'>
                <a href="" className="logo">Logo</a>
                <nav className="navbar">
                    <input type="text" />
                    <button onClick={HandleCreateBoard}>Create Board</button>
                </nav>
            </header>
        </>
    );
};

export default Header;