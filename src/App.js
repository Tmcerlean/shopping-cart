import React from 'react';
import './styles/App.css';
import { Link } from 'react-router-dom';

const App = () => {

    return (
        <div className="main-container">
            <Link to="/shop">
                <div className="centre-box">
                    Shop Now
                </div>
            </Link>
        </div>
    );
}

export default App;