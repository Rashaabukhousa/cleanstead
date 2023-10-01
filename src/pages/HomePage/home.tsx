import React from 'react'
import Firstnav from '../../components/Firstnav/firstnav';
import Header from '../../components/Header/header';
import Service from './components/Services/service';
import Review from './components/Reviews/review';
import Choise from './components/Choise/choise';
import Footer from '../../components/Footer/footer';

import "./home.css";

function home() {
    return (
        <div>
            <Firstnav />
            <Header />
            <Service />
            <Choise />
            <Review />
            <Footer />
        </div>
    )
}

export default home;