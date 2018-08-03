import React, { Component } from 'react'
import FaClose from 'react-icons/lib/ti/times';

class Popup extends Component {
    render() {
        const { data, closeInfo } = this.props;
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
                            {/* <button type="button" className="btn btn-default"><a href={data.url} target="_blank"> Besök </a> </button> */}
                            <FaClose className='popup-close' onClick={() => closeInfo()} />

                        </div>
                    </div>
                </div>
                : null
        );
    }
}

export default Popup;
