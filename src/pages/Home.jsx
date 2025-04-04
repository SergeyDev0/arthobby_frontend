import React from 'react';
import Header from '../components/header/Header';
import Popular from '../components/popular/Popular';
import NewItems from '../components/newItems/NewItems';

const Home = () => {
  
  return(
    <>
        <Header />
        <Popular />
        <NewItems />
    </>
  )
}

export default Home;