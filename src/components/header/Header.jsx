import React from 'react';
import { useLocation } from "react-router";
import Cart from './Cart';
import Logo from './Logo';
import HeaderCatalog from './HeaderCatalog';
import InputBar from './InputBar';
import Back from './Back';
import ClearCart from './ClearCart';
import Like from './Like';

const Header = () => {
    const {pathname} = useLocation();

    if(pathname === '/') {
        return(
            <header className='header'>
                <div className="header-top">
                    <HeaderCatalog />
                    <Logo />
                    <Cart />
                </div>
                <div className="header-bottom">
                    <InputBar />
                </div>
            </header>
        )
    } else if(pathname === "/cart") {
        return(
            <header className='header'>
                <div className="header-top">
                    <Back />
                    <h1 className="header__cart-logo">Корзина</h1>
                    <ClearCart />
                </div>
            </header>
        )
    } else if(pathname === "/catalog") {
        return(
            <header className='header'>
                <div className="header-top">
                    <Back />
                    <h1 className="header__cart-logo">Каталог</h1>
                </div>
            </header>
        )
    } else if (pathname === "/product") {
        return(
            <header className='header'>
                <div className="header-top">
                    <Back />
                    <Logo />
                    <Like />
                </div>
            </header>
        )
    } else {
        return (
            <header className='header'>
                <div className="header-top">
                    <Back />
                    <Logo />
                    <Cart />
                </div>
            </header>
        )
    }
}

export default Header;

