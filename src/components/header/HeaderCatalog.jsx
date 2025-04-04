import React from 'react';
import { Link } from 'react-router-dom';
import catalogIcon from '../../icons/menu.svg'

const Catalog = () => {
    return(
        <Link to="/catalog" className="header-catalog">
            <img width={23} height={23} src={catalogIcon} alt="catalog" />
        </Link>
    )
}

export default Catalog;