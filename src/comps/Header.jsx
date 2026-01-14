import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header className="header">
                <img className="logo" src="../public/EH/android-chrome-192x192.png" alt="logo" />
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Emma</Link></li>
                        <li><Link to="/memory">Memory</Link></li>
                        <li><Link to="/tictactoe">TicTacToe</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;