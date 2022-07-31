import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './board/board.css'
import {createBoardHtml, createCardsEventListeners} from './board/board.js'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<App />*/}
        {createBoardHtml()}
    </React.StrictMode>
);

window.onload = function () {
    createCardsEventListeners()
}

