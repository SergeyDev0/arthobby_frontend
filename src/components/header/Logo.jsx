import React from 'react';
import logoIcon from '../../icons/logo.svg'

const Logo = () => {
    return(
        <div className='header__wrapper-logo'>
            <img width={100} height={25} className='header-logo' src={logoIcon} alt="logo"/>
        </div>

    )
}

export default Logo;