import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import { HashLink as Link } from 'react-router-hash-link';

class Whoops extends Component {
    render() {
        return (
            <div className='whoops'>
                <div className='footer-adj'>
                    <Header />
                    <div className='container'>

                        <h1>Hoppsan! <br />Här fanns inget</h1>
                        <span className='backtostart'><Link to='/'><p>Ta mig tillbaka till startsidan!</p></Link></span>

                    </div >
                    <Footer />
                </div >
            </div >
        )
    }

}
export default Whoops;