import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPhone from 'react-icons/lib/fa/phone';

class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <div className='footer-adj'>

                    <Header />
                    <div className='container-fluid'>
                        <img src="/images/contact.jpg" alt="" />
                    </div>

                    <div className='container'>
                        <h1>Kontakt</h1>
                        <div className='row'>

                            <div className='col-md-6'>
                                <span><FaEnvelope /></span>
                                <p><a href="mailto:madelein.skoglund@gmail.com">madelein.skoglund@gmail.com</a></p>
                            </div>
                            <div className='col-md-6'>
                                <span><FaPhone /></span>
                                <p><a href="tel:0704404060">070 440 40 60</a></p>
                            </div>
                        </div>
                    </div>


                    <Footer />
                </div >
            </div >

        )
    }
}

export default Contact;
