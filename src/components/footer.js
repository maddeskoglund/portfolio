import React, { Component } from 'react';
import FaPhone from 'react-icons/lib/fa/phone';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaGithub from 'react-icons/lib/fa/github';

class Footer extends Component {
    render() {
        return (
            <div className='container-fluid footer'>
                <div className='container'>
                    <div className='row'>

                        <div className='contact item-1 col-4'><a href='https://github.com/maddeskoglund' target="_blank" rel="noopener noreferrer"><FaGithub /></a></div>
                        <div className='contact item-2 col-4'><a href="mailto:madelein.skoglund@gmail.com"><FaEnvelope /></a></div>
                        <div className='contact item-3 col-4'><a href="tel:0704404060"><FaPhone /></a></div>
                    </div>
                    <div className='copy'><p>© {new Date().getFullYear()} Madelein Skoglund</p></div>
                </div>
            </div>
        )
    }
}

export default Footer;
