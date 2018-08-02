import React from 'react';


const Popup = ({ post }) => (
    <div className='popup'>
        <div className='inner-popup' >
            <div className='popup-image'>
                <img src={post.responsive} alt="" />
            </div>
            <div className='popup-info'>
                <h4>{post.name}</h4>
                <p className='caption'>{post.caption}</p>
                <p>{post.info}</p>
            </div>
        </div>
    </div>
)

export default Popup;
