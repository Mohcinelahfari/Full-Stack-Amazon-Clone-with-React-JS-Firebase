import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search-engine-optimization.png";
import "./Header.css";
import ShoppingImg from "../../assets/images/shopping-cart.png"
import { useAuth } from '@/context/GlobalSttate';
import { auth } from '@/firebase';
function Header() {

    const {user, basket} = useAuth()
    // console.log(user?.email)
    const handeAuthentication = () => {
        auth.signOut()
    }
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
                <Link to={!user && "/login"}>
                    <div className="header-option" onClick={handeAuthentication}>
                        <div className="header-optionLineOne">Hello 
                            {user?.email ? `${user?.email}` : "Guest"}
                        </div>
                        <div className="header-optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </div>
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
                        <span className="header-basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
