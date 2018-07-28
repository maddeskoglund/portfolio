import React, { Component } from 'react';

class Popup extends Component {

    render() {
        return (
            <div className='popup'>
                <div id={this.props.activePost} className='inner-popup' >
                    <div className='popup-image'>

                        <img src={this.props.responsive} alt="" />

                    </div>
                    <div className='popup-info'>
                        <h4>{this.props.name}</h4>
                        <p className='caption'>{this.props.caption}</p>

                        <p>{this.props.info}</p>
                    </div>




                </div>
            </div>
        )

    }

}
export default Popup;
