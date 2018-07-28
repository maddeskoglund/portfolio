import React, { Component } from 'react';
// import '../App.css';
import Popup from './popup';
import posts from '../data/posts';

class PortfolioTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts,
            showPopup: false,

        };
        console.info('Hej! Välkommen till min portfolio. Hör gärna av dig om du vill veta mer om mig!')
    }

    togglePopup = () => {
        key: posts.id
        this.setState({
            // clickedKey: id,
            showPopup: !this.state.showPopup,
            // activePost: this.state.posts.id
            activePost: posts.id



        });
        // console.log(id)
    }



    // post.url = true : div.style.display = 'inline' ? div.style.display = 'none';




    render() {
        return (

            <div id='portfolio'>
                <div className='container portfolio'>
                    <h1>Portfolio</h1>
                    <p className='portfolio-info'>Min portfolio innehåller inte så många projekt för tillfället. Började studera frontend hösten 2017, och knappt ett år senare bygger jag min portfolio själv i React. Är faktiskt lite imponerad och stolt över mig själv. Mina allra första projekt hittar du längst ner på listan, det är ganska så stor skillnad på kvalitet och framförallt hastigheten jag bygger i nu. Fler hopp- och lekprojekt finns på Github. Har några pågående projekt på min praktikplats just nu också.</p>
                </div >

                <div className='container top-level row'>

                    {posts.map((post, i) =>
                        // <div onClick={(i) => this.toggle(i)} key={i} className='col-md-4 portfolio-items'>
                        <div onClick={this.togglePopup} key={i} className='col-md-4 portfolio-items'>
                            {/* <div onClick={this.togglePopup.bind(this, i)} key={post.id} className='col-md-4 portfolio-items'> */}

                            <div className='img-box'>
                                <img src={post.image} alt="" />
                            </div>
                            <div className='portfolio-bottom'>
                                <h4>{post.name}</h4>
                                <p className='caption'>{post.caption}</p>
                            </div>
                            <div className='hidden-desktop'><p>{post.info}</p></div>

                            {
                                this.state.showPopup &&
                                <Popup
                                    // post={this.state.posts}
                                    name={post.name}
                                    caption={post.caption}
                                    info={post.info}
                                    responsive={post.responsive}
                                    activePost={this.state.activePost}
                                />
                            }


                        </div>
                    )}



                </div>

            </div >
        )
    }
}

export default PortfolioTest;