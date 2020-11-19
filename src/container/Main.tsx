import React from 'react';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './../styles/css/main.css'

const Main = () =>{
    return(
        <div className='main-container'>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default Main;