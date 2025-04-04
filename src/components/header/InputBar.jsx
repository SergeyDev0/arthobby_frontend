import React from "react";
import SearchIcon from "../../icons/search.svg";

const InputBar = () => {
    return(
        <>
            <input className="search" type="text" placeholder="Введите запрос..." />
            <button className="search-icon"><img width={25} height={25} src={SearchIcon} alt="search" /></button>
        </>
    )
}

export default InputBar;