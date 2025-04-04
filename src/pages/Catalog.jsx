import React from "react";
import Header from "../components/header/Header";
import CatalogItem from "../components/catalog/CatalogItem";

const Catalog = () => {
    return(
        <>
            <Header />
            <div className="catalog-list">
                <CatalogItem></CatalogItem>
            </div>
        </>
    )
}

export default Catalog;