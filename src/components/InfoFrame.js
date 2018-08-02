import React, { Component } from 'react'
import FaClose from 'react-icons/lib/ti/times';
import FaPhone from 'react-icons/lib/fa/phone';

class InfoFrame extends Component {
    render() {
        const { data, closeInfo } = this.props;
        console.log(data)
        return (
            { data } ?
                <div className='popup'>
                    <div className='inner-popup' >
                        <div className='popup-image'>
                            <img src={data.responsive} alt="" />
                        </div>
                        <div className='popup-info'>
                            <h4>{data.name}</h4>
                            <p className='caption'>{data.caption}</p>
                            <p>{data.info}</p>
                            <FaClose className='popup-close' onClick={() => closeInfo()} />

                        </div>
                    </div>
                </div>

                // <p>
                //     Namn: {data.name}<br />
                //     Information: {data.comment}<br />
                //     <button onClick={() => closeInfo()} >
                //         Dölj
                // </button>
                // </p>
                : null
        );
    }
}

export default InfoFrame
