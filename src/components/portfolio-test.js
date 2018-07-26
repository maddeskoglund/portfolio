import React, { Component } from 'react';
import '../App.css';
import Popup from './popup';

class PortfolioTest extends Component {
    constructor(props) {
        super(props);

        const posts = [
            {
                id: "1",
                name: "Madelein Skoglund",
                caption: "React PWA JSX CSS Javascript ES6",
                info: "Du ser den live nu! Kul att få jobba med React igen, jag gillar det. Inte så avancerat den här gången, men mycket snabbare och smidigare den här gången.",
                image: '/images/madeleinskoglund.jpg',
                // responsive: '/images/responsive-blogg.jpg',                
                // url: '',
                popup: false
            },
            {
                id: "2",
                name: "Väderapp",
                caption: "React Redux PWA API JSX CSS Javascript ES6",
                info: "En väderapp byggd för skolarbete. Riktigt roligt och svårt att som nybörjare komma in i både Javascript och React samtidigt, efterhand las Redux till också. Appen visar högsta och lägsta temperaturen för tre dagar, icon för typen av väder, nederbörd och medelhastigheten för vindstyrka. API:t hämtar data från SMHI. Du hittar den på mitt Github-konto.",
                image: '/images/weather.jpg',
                // responsive: '/images/responsive-blogg.jpg',                
                // url: ''                
            },
            {
                id: "3",
                name: "Trähusarkitekten",
                caption: "Logotyp Grafisk profil Webbdesign WordPress",
                info: "Arkitektbyrå som behövde en ny hemsida. Jag har tagit fram den grafiska designen, logotypen och gjort webbdesignen till dem. Byggd i WordPress.",
                image: '/images/trahusarkitekten.jpg',
                responsive: '/images/responsive-trahusarkitekten.gif',
                url: 'https://trahusarkitekten.se'
            },
            {
                id: "4",
                name: "Nyckelhus",
                caption: "Logotyp Grafisk profil Webbdesign WordPress",
                info: "Hustillverkare som delvis ska utöka sin verksamhet och behövde därför en ny hemsida. Jag har tagit fram den grafiska designen, logotypen och gjort webbdesignen till dem. Jag har även skrivit en hel del av texterna. Husmodeller kommer att läggas till inom kort. Byggd i WordPress.",
                image: '/images/nyckelhus.jpg',
                responsive: '/images/responsive-nyckelhus.gif',
                url: 'https://nyckelhus.se'

            },
            {
                id: "5",
                name: "Lilla Gilbert",
                caption: "Logotyp Grafisk profil Webbdesign WordPress",
                info: "Skolprojekt. Uppdrag; Bygg en webbshop med minst en produkt. Slutligen hamnade mitt val på posters för barn, då jag tycker att det saknas söta posters på marknaden. Gjorde en del illustrationer i Adobe Illustrator. Tyvärr väldigt seg, lägger skulden på webbhotellet. Byggd i WordPress.",
                image: '/images/lillagilbert.jpg',
                responsive: '/images/responsive-lillagilbert.gif',
                url: 'https://www.lillagilbert.se'
            },
            {
                id: "6",
                name: "Blogg i HTML / CSS",
                caption: "HTML CSS Responsive Resposive-images",
                info: "Skolprojekt. Uppdraget var att bygga en blogg i HTML och CSS. Självklart responsiv.",
                image: '/images/blogg.jpg',
                responsive: '/images/responsive-blogg.jpg',
                // url: 'http://nyckelhus.se'
            },
            {
                id: "7",
                name: "Bokhandel i HTML / CSS",
                caption: "HTML CSS Responsive",
                info: "Skolprojekt. Mitt första projekt, kommer ihåg hur ingenting blev som jag ville till en början. Byggd i HTML och CSS. Uppdraget var att bygga en bokhandel, likt bokus.",
                image: '/images/min-bok.jpg',
                responsive: '/images/responsive-min-bok.jpg',
                // url: 'https://nyckelhus.se'
            },
        ];

        this.state = {
            posts,
            showPopup: false
        };
        console.info('Hej! Välkommen till min portfolio. Hör gärna av dig om du vill veta mer om mig!')
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
            // showPopup: !this.state.posts.popup
            // !this.state.post.popup: true;
        });

    }



    // post.url = true : div.style.display = 'inline' ? div.style.display = 'none';




    render() {
        return (

            <div id='portfolio'>
                {/* <div className='footer-adj'> */}

                <div className='container portfolio'>
                    <h1>Portfolio</h1>
                    <p className='portfolio-info'>Min portfolio innehåller inte så många projekt för tillfället. Började studera frontend hösten 2017, och knappt ett år senare bygger jag min portfolio själv i React. Är faktiskt lite imponerad och stolt över mig själv. Mina allra första projekt hittar du längst ner på listan, det är ganska så stor skillnad på kvalitet och framförallt hastigheten jag bygger i nu. Fler hopp- och lekprojekt finns på Github. Har några pågående projekt på min praktikplats just nu också.</p>
                </div >

                <div className='container top-level row'>

                    {this.state.posts.map((post) =>
                        <div onClick={this.togglePopup.bind(this)} key={post.id} className='col-md-4 portfolio-items'>
                            {/* <div key={post.id} className='col-md-4 portfolio-items'> */}
                            <div className='img-box'>
                                <img src={post.image} alt="" />
                            </div>
                            <div className='portfolio-bottom'>
                                <h4>{post.name}</h4>
                                <p className='caption'>{post.caption}</p>
                            </div>
                            <div className='hidden-desktop'><p>{post.info}</p></div>



                            {
                                this.state.showPopup ?
                                    <Popup key={post.id}

                                        name={post.name}
                                        caption={post.caption}
                                        info={post.info}
                                        responsive={post.responsive}


                                    />
                                    : null
                            }
                        </div>
                    )}
                    {/* <div className='portfolio-bottom'></div> */}

                    {/* <div className='col-md-4'>
                        <img src="/images/contact.jpg" alt="" />
                    </div>
                    <div className='col-md-4'>
                        <img src="/images/contact.jpg" alt="" />
                    </div> */}

                </div>
                {/* <div className='container-fluid portfolio-items row'>

                    <div className='col-md-4'>
                        <img src="/images/contact.jpg" alt="" />
                    </div>
                    <div className='col-md-4'>
                        <img src="/images/contact.jpg" alt="" />
                    </div>
                    <div className='col-md-4'>
                        <img src="/images/contact.jpg" alt="" />
                    </div>

                </div> */}
                {/* </div > */}
            </div >
        )
    }
}

export default PortfolioTest;