import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search-engine-optimization.png";
import "./Header.css";
import ShoppingImg from "../../assets/images/shopping-cart.png"
function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="logo" className="header-logo" />
            </Link>
            <div className="header-search">
                <input type="text" className="header-searchInput" />
                <img src={searchIcon} alt="Search Icon" className="header-searchIcon" />
            </div>
            <div className="header-nav">
                <Link to="/login">
                    <div className="header-option">
                        <div className="header-optionLineOne">Hello Guest</div>
                        <div className="header-optionLineTwo">Sign in</div>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className="header-option">
                        <div className="header-optionLineOne">Returns</div>
                        <div className="header-optionLineTwo">& Orders</div>
                    </div>
                </Link>
                <div className="header-option">
                    <div className="header-optionLineOne">Your</div>
                    <div className="header-optionLineTwo">Prime</div>
                </div>
                <Link to="/checkout">
                    <div className="header-optionBasket">
                    <img src={ShoppingImg} className='sizeimage'/>
                        <span className="header-basketCount">0</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
