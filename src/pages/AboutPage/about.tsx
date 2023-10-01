import React from 'react';
import Nav from '../../components/Nav/nav';
import Aboutsec from './components/Aboutsec/aboutsec';
import Footer from '../../components/Footer/footer';
import '../../index.css';


const About = () => {
    return (
        <div className=''>
            {/*navbar */}
            <Nav />
            <Aboutsec />
            <Footer />

        </div >
    )
}
export default About;