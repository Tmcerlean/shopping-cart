import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {

    return (
        <nav className='main-nav'>
            <div className="main-nav-left">
                <i className="fab fa-angellist main-logo"></i>
            </div>
            <div className="main-nav-right">
                <Link to='/'>
                    <div className="main-nav-item">Home</div>
                </Link>
                <Link to='/shop'>
                    <div className="main-nav-item">Shop</div>
                </Link>
                <Link to='/cart'>
                    <div className="main-nav-item">
                        <i className="fas fa-shopping-cart"></i>
                        <p>{props.cartItems.length}</p>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Nav;
