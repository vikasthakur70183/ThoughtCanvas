import React, { useState } from 'react';
import './Header.css'
const Header = () => {
    const HandleCreateBoard = () => {
        SetShowCreateBoard(showCreateBoard => !showCreateBoard);
    }
    return (
        <>
            <header className='Header'>
                <a href="" className="logo">Posts</a>
                <nav className="navbar">
                    <input type="text" />
                    <button onClick={HandleCreateBoard}>Create Posts</button>
                </nav>
            </header>
        </>
    );
};

export default Header;