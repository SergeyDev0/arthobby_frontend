import React from 'react';
import filterIcon from '../../icons/filter.svg';

const Filter = () => {
    return(
        <button className="filter">
            <img src={filterIcon} alt="filter" />
        </button>
    )
}

export default Filter;